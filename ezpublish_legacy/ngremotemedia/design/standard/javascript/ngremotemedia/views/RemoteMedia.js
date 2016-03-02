NgRemoteMedia.views.NgRemoteMedia = Backbone.View.extend({
    // Holds current active subview
    view: null,
    destination: null,

    initialize: function(options) {
        options = (options || {});
        _.bindAll(this, 'render', 'search', 'close', 'enableUpload', 'changeMedia');       
        this.listenTo(this.model, 'change', this.render);
        
        return this;
    },

    convert_versions: function(versions){
        if(_.isArray(versions)){return versions;}
        return _.map(versions, function(size, name) {
            return {
                size: size.split ? _.map(size.split('x'), function(n){return parseInt(n, 10);}) : size,
                name: name
            };
        });
    },

    events: {
        'click .ngremotemedia-remote-file': 'search',
        'click .ngremotemedia-scale': 'scaler',
        'click .ngremotemedia-remove-file': 'remove'
    },

    render: function() {
        this.model.get('content') && this.$el.html($(this.model.get('content')).html());
        this.destination = this.$('.media-id');
        this.renderTags().enableUpload();

        var data = this.$('.ngremotemedia-scale').data();

        var available_versions = this.convert_versions(data.versions);
        this.model.set({available_versions: available_versions, truesize: data.truesize}, {silent: true});

        return this;
    },


    renderTags: function() {
        new NgRemoteMedia.views.Tagger({
            el: this.$('.ngremotemedia-tags').off(),
            model: this.model.get('media')
        }).render();
        return this;
    },    

    remove: function(e) {
        e.preventDefault();
        this.destination.attr('value', 'removed');
        this.$('.ngremotemedia-image, .ngremotemedia-scale, .ngremotemedia-remove-file').remove();
        return this;
    },

    changeMedia: function(new_media){
        this.model.change_media(new_media.id);
        return this;
    },

    enableUpload: function() {
        this.upload = new NgRemoteMedia.views.Upload({
            model: this.model,
            uploaded: function(resp){
                resp && this.model.set(this.model.parse(resp.model_attributes));
            }.bind(this),
            el: this.$el,
            version: this.model.get('version')
        });
        this.upload.render();
        return this;
    },

    search: function() {
        var modal = new NgRemoteMedia.views.Modal().insert().render();

        this.view = new NgRemoteMedia.views.Browser({
            model: this.model,
            collection: this.model.medias,
            onSelect: function(model){ //also used just for close on upload
                modal.close();
                model && this.changeMedia(model);
            }.bind(this),
            el: modal.show().contentEl
        }).render();

        this.model.medias.search(''); //Fetch

    },

    // Open a scaling gui
    scaler: function() {
        var modal = new NgRemoteMedia.views.Modal().insert().render(),
            scaler_view;

        this.model.fetch({
            transform: false
        }).done(function(){

            scaler_view = new NgRemoteMedia.views.Scaler({
                trueSize: this.model.get('truesize'),
                model: this.model,
                el: modal.show().contentEl
            }).render();

        }.bind(this));


        modal.on('close', function(){
            scaler_view.trigger('destruct');
            scaler_view.trigger('stack.popped');
        });        

    },

    close: function() {
        this.view && this.view.close && this.view.close();
    }
});