import Ember from 'ember';

export default Ember.Component.extend({
  newReviewForm: false,
  actions: {
    showReviewForm(){
      this.set('newReviewForm', true);
    },
    cancelReview(){
      this.set('newReviewForm', false);
    },
    addReview(){
      var params ={
        author: this.get('author'),
        title: this.get('title'),
        message: this.get('review'),
        rating: this.get('rating'),
        product: this.get('product')

      };
      this.set('newReviewForm', false);
      this.sendAction('addReview', params);
    }

  }
});
