import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
    });
  },
  actions: {
    // savePost3 takes in params which were sent w it from inside savePost1 on new-post.js
    savePost3(params) {
      var newPost = this.store.createRecord("post", params);
      newPost.save();
      this.transitionTo("index");
    },
  }
});
