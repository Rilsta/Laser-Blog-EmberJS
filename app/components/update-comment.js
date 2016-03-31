import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        user: this.get('user'),
        entry: this.get('entry'),
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
