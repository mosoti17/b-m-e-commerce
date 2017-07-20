import Ember from 'ember';

export default Ember.Component.extend({
shopingCart: Ember.inject.service(),
  actions: {
    addProduct(params){
      this.sendAction('addProduct',params);
    },
    addToCart(item) {
      this.get('shopingCart').add(item);
    },
  }

});
