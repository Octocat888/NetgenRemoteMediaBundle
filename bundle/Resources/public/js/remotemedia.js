(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3fb5":function(e,t,r){},4914:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("3b8d"),a=(r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d"),r("a026")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlay"},[r("div",{staticClass:"media-modal"},[r("div",{staticClass:"title"},[e._v("\n      Select media\n      "),r("span",{staticClass:"close",on:{click:e.close}},[e._v("×")])]),r("div",{staticClass:"body"},[r("media-facets",{attrs:{folders:e.folders,facets:e.facets},on:{change:e.handleFacetsChange}}),r("media-galery",{attrs:{media:e.media,canLoadMore:e.canLoadMore},on:{loadMore:e.handleLoadMore}})],1)])])},c=[],i=(r("8e6e"),r("456d"),r("bd86")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mediaFacets"},[r("ul",{staticClass:"tabs"},[r("li",{class:{active:e.isType(e.TYPE_IMAGE)}},[r("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_IMAGE)}}},[e._v("Image and documents")])]),r("li",{class:{active:e.isType(e.TYPE_VIDEO)}},[r("span",{on:{click:function(t){return e.handleTypeChange(e.TYPE_VIDEO)}}},[e._v("Video")])])]),r("div",{staticClass:"body"},[r("div",{staticClass:"form-field"},[r("label",{attrs:{for:"folder"}},[e._v("Select Folder")]),r("v-select",{attrs:{options:e.foldersWithNew,label:"name",reduce:function(e){return e.id},placeholder:"showing all files"},on:{input:e.handleFolderChange},scopedSlots:e._u([{key:"search",fn:function(t){return["checkbox"===t.attributes.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.folderSearchQuery)?e._i(e.folderSearchQuery,null)>-1:e.folderSearchQuery},on:{change:function(t){var r=e.folderSearchQuery,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,c=e._i(r,o);n.checked?c<0&&(e.folderSearchQuery=r.concat([o])):c>-1&&(e.folderSearchQuery=r.slice(0,c).concat(r.slice(c+1)))}else e.folderSearchQuery=a}}},"input",t.attributes,!1),t.events)):"radio"===t.attributes.type?r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:"radio"},domProps:{checked:e._q(e.folderSearchQuery,null)},on:{change:function(t){e.folderSearchQuery=null}}},"input",t.attributes,!1),t.events)):r("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.folderSearchQuery,expression:"folderSearchQuery"}],staticClass:"vs__search",attrs:{type:t.attributes.type},domProps:{value:e.folderSearchQuery},on:{input:function(t){t.target.composing||(e.folderSearchQuery=t.target.value)}}},"input",t.attributes,!1),t.events))]}},{key:"option",fn:function(t){return[t.new?r("div",[e._v("\n            "+e._s(t.name)+"\n            "),r("button",[e._v("Create new")])]):t.added?r("div",[e._v(e._s(t.name)+" (new)")]):r("div",[e._v(e._s(t.name))])]}}]),model:{value:e.selectedFolder,callback:function(t){e.selectedFolder=t},expression:"selectedFolder"}})],1),r("div",{staticClass:"search"},[r("ul",{staticClass:"searchType"},[r("li",{class:{active:e.isSearch(e.SEARCH_NAME)}},[r("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_NAME)}}},[e._v("Name")])]),r("li",{class:{active:e.isSearch(e.SEARCH_TAG)}},[r("span",{on:{click:function(t){return e.handleSearchChange(e.SEARCH_TAG)}}},[e._v("Tag")])])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search by "+e.searchName},domProps:{value:e.query},on:{keyup:e.handleQueryChange,input:function(t){t.target.composing||(e.query=t.target.value)}}})])])])},l=[],d=(r("7f7f"),r("7514"),r("75fc")),u="image",f="video",h="name",p="tag",m="all",y=r("4a7a"),v=r.n(y),b={name:"MediaFacets",props:["folders","facets"],data:function(){return{TYPE_IMAGE:u,TYPE_VIDEO:f,SEARCH_NAME:h,SEARCH_TAG:p,FOLDER_ALL:m,selectedFolder:this.facets.folder,folderSearchQuery:"",query:this.facets.query,addedFolders:[]}},computed:{searchName:function(){return this.facets.searchType===h?"name":"tag"},foldersWithNew:function(){var e=this,t=[].concat(Object(d["a"])(this.folders),Object(d["a"])(this.addedFolders));return 0===this.folderSearchQuery.length?t:t.find((function(t){return t.name===e.folderSearchQuery}))?t:[{name:this.folderSearchQuery,id:this.folderSearchQuery,new:!0}].concat(Object(d["a"])(t))}},methods:{handleSearchChange:function(e){this.$emit("change",{searchType:e})},handleTypeChange:function(e){this.$emit("change",{mediaType:e})},isType:function(e){return this.facets.mediaType===e},isSearch:function(e){return this.facets.searchType===e},handleFolderChange:function(e){this.folderSearchQuery="",this.addedFolders.push({id:e,name:e,added:!0}),this.$emit("change",{folder:this.selectedFolder})},handleQueryChange:function(){this.$emit("change",{query:this.query})}},components:{"v-select":v.a}},g=b,_=(r("b1b8"),r("2877")),S=Object(_["a"])(g,s,l,!1,null,"42143427",null),C=S.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mediaGalery"},[r("div",{staticClass:"items"},e._l(e.media,(function(t){return r("div",{key:t.id,staticClass:"media"},["image"===t.type?r("div",[r("img",{attrs:{src:t.url,alt:t.filename}}),r("Label",[e._v(e._s(t.filename))]),r("div",[e._v(e._s(t.width)+" x "+e._s(t.height))])],1):r("div",[r("i",{staticClass:"video"}),r("Label",[e._v(e._s(t.filename))]),r("div",[e._v(e._s(t.width)+" x "+e._s(t.height))])],1)])})),0),e.canLoadMore?r("button",{on:{click:function(t){return e.$emit("loadMore")}}},[e._v("Load more")]):e._e()])},w=[],j={name:"MediaGalery",props:["media","canLoadMore","onLoadMore"]},E=j,M=(r("6fdb"),Object(_["a"])(E,O,w,!1,null,"3d7cfa0e",null)),T=M.exports,x=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")},k=r("b012"),P=r.n(k);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=25,F={name:"MediaModal",props:["folders"],components:{"media-facets":C,"media-galery":T},data:function(){return{media:[],canLoadMore:!1,facets:{folder:"",searchType:h,mediaType:u,query:""}}},methods:{close:function(){this.$emit("close")},debouncedLoad:P()((function(e){this.load(e)}),500),load:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,o,c,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{patch:!1},r=t.patch,this.abortController&&this.abortController.abort(),this.abortController=new AbortController,n={limit:L,offset:r?this.media.length:0,q:this.facets.query,mediatype:this.facets.mediaType,folder:this.facets.folder||m,search_type:this.facets.searchType},a="/ngadminui/ngremotemedia/browse?".concat(x(n)),e.prev=5,e.next=8,fetch(a,{signal:this.abortController.signal});case 8:return o=e.sent,e.next=11,o.json();case 11:c=e.sent,this.media=r?this.media.concat(c.hits):c.hits,this.canLoadMore=c.load_more,e.next=20;break;case 16:if(e.prev=16,e.t0=e["catch"](5),20===e.t0.code){e.next=20;break}throw e.t0;case 20:case"end":return e.stop()}}),e,this,[[5,16]])})));function t(){return e.apply(this,arguments)}return t}(),handleLoadMore:function(){this.debouncedLoad({patch:!0})},handleFacetsChange:function(e){this.facets=A({},this.facets,{},e),this.debouncedLoad()}},mounted:function(){this.load()}},q=F,R=(r("9ebf"),Object(_["a"])(q,o,c,!1,null,"78fc8104",null)),N=R.exports;r("3fb5");a["a"].config.productionTip=!1;var D=function(){document.querySelectorAll(".ngremotemedia-type").forEach((function(e,t){window["remoteMedia".concat(t)]=new a["a"]({el:e,data:{folders:[],modalOpen:!1},components:{"media-modal":N},methods:{browseMedia:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ngadminui/ngremotemedia/folders");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,this.folders=r,this.modalOpen=!0;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleModalClose:function(){this.modalOpen=!1}}})}))};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?D():document.addEventListener("DOMContentLoaded",D)},"6fdb":function(e,t,r){"use strict";var n=r("95fe"),a=r.n(n);a.a},"95fe":function(e,t,r){},"9ebf":function(e,t,r){"use strict";var n=r("4914"),a=r.n(n);a.a},b1b8:function(e,t,r){"use strict";var n=r("e5fa"),a=r.n(n);a.a},e5fa:function(e,t,r){}});
//# sourceMappingURL=app.js.map