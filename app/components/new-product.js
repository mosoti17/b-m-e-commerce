import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,
  actions: {
    showProductForm(){
      this.set('newProductForm', true);
    },
    cancelProduct(){
      this.set('newProductForm', false);
    },
    addProduct(){
      var params ={
        name: this.get('name'),
        price: this.get('price'),
        category: this.get('category'),
        stockAmount: this.get('stockAmount'),
        discount: this.get('discount'),
        image: this.get('image')
      };
      this.set('newProductForm', false);
      this.sendAction('addProduct', params);
    }

  }
});
