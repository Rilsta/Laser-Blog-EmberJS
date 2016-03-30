import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      // recieve savePost2 from index.hbs, emit savePost2 with params into addNewPost in routes/index.js
      this.sendAction('savePost2', params);
    }
  }
});
