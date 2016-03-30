import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        content: this.get('content')
      };
      this.set('title', "");
      this.set('author', "");
      this.set('img', "");
      this.set('content', "");
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
