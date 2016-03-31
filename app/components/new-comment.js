import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    save1(post) {
      var params = {
        user: this.get('user'),
        entry: this.get('entry'),
        post: this.get('post'),
      };
      this.set('addNewComment', false);
      console.log(params);
      this.sendAction('save2', params);
    }
  }
});
