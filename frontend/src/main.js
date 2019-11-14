import Vue from 'vue';
import './scss/ngremotemedia.scss';
import 'cropperjs/dist/cropper.css';
import MediaModal from './components/MediaModal';
import UploadModal from './components/UploadModal';
import CropModal from './components/CropModal';
import { initDirective } from './utility/directives';
import vSelect from 'vue-select';
import { formatByteSize } from './utility/utility';
import './utility/polyfills';
import { truthy } from './utility/predicates';
import { objectFilter } from './utility/functional';

Vue.config.productionTip = false;

var handleDOMContentLoaded = function() {
  document.querySelectorAll('.ngremotemedia-type').forEach((el, i) => {
    window[`remoteMedia${i}`] = new Vue({
      el,
      directives: {
        init: initDirective
      },
      data: {
        RemoteMediaSelectedImage,
        folders: [],
        mediaModalOpen: false,
        cropModalOpen: false,
        uploadModalOpen: false,
        uploadModalLoading: false,
        selectedImage: {
          id: '',
          name: '',
          type: 'image',
          url: '',
          alternateText: '',
          tags: [],
          size: '',
          variations: {},
          height: 0,
          width: 0
        },
        allTags: []
      },
      computed: {
        nonImagePreviewClass() {
          return this.selectedImage.type === 'video' ? 'ng-video' : 'ng-book';
        },
        formattedSize() {
          return formatByteSize(this.selectedImage.size);
        },
        stringifiedVariations() {
          return JSON.stringify(
            objectFilter(truthy)(this.selectedImage.variations)
          );
        }
      },
      components: {
        'media-modal': MediaModal,
        'v-select': vSelect,
        'crop-modal': CropModal,
        'upload-modal': UploadModal,
      },
      methods: {

        async fetchFolders() {
          const response = await fetch('/ngadminui/ngremotemedia/folders'); //@todo: can't have this hardcoded here
          const folders = await response.json();
          this.folders = folders;
        },
        async handleBrowseMediaClicked() {
          this.mediaModalOpen = true;
          this.fetchFolders();
        },
        handleCropClicked() {
          this.cropModalOpen = true;
        },
        handleMediaModalClose() {
          this.mediaModalOpen = false;
        },
        handleCropModalClose() {
          this.cropModalOpen = false;
        },
        handleUploadModalClose() {
          this.uploadModalOpen = false;
        },
        handleTagsInput(value) {
          this.allTags = [...new Set([...this.allTags, ...value])];
        },
        handleMediaSelected(item) {
          this.selectedImage = {
            id: item.resourceId,
            name: item.filename,
            type: item.type,
            url: item.url,
            alternateText: '',
            tags: item.tags,
            size: item.filesize,
            variations: {},
            height: item.height,
            width: item.width
          };

          this.mediaModalOpen = false;
        },
        handleRemoveMediaClicked() {
          this.selectedImage = {
            id: '',
            name: '',
            type: 'image',
            url: '',
            alternateText: '',
            tags: [],
            size: 0,
            variations: {},
            height: 0,
            width: 0
          };
        },
        handleFileInputChange(e) {
          this.uploadModalOpen = true;
          this.uploadModalLoading = true;

          this.fetchFolders();

          const file = e.target.files.item(0);
          const reader = new FileReader();
          if (file) {
            this.selectedImage = {
              id: file.name,
              name: file.name,
              type: 'image',
              url: '',
              alternateText: '',
              tags: [],
              size: file.size,
              variations: {},
              height: 0,
              width: 0
            };

            reader.addEventListener(
              'load',
              function() {
                this.$refs.image.onload = function() {
                  this.selectedImage.width = this.$refs.image.naturalWidth,
                  this.selectedImage.height = this.$refs.image.naturalHeight;
                  this.uploadModalLoading = false;
                }.bind(this);

                this.selectedImage.url = reader.result;
              }.bind(this),
              false
            );

            reader.readAsDataURL(file);
          }
        },
        handleVariationCropChange(newValues) {
          this.selectedImage = {
            ...this.selectedImage,
            variations: {
              ...this.selectedImage.variations,
              ...newValues
            }
          };
        },
        handleUploadModalSave(name){
          this.selectedImage = {
            ...this.selectedImage,
            name,
            id: name
          };
          this.uploadModalOpen = false;
        }
      },
      mounted() {
        this.allTags = [...this.selectedImage.tags];
      }
    });
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  handleDOMContentLoaded();
} else {
  document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
}
