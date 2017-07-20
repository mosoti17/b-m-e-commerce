import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions:{
    showUpdateForm(){
      this.set('updateProductForm', true);
    },
    cancelUpdate(){
      this.set('updateProductForm', false);
    },
    updateProduct(product){
      var params ={
        name: this.get('name'),
        price: this.get('price'),
        category: this.get('category'),
        stockAmount: this.get('stockAmount'),
        discount: this.get('discount'),
        image: this.get('image')
      };
      this.set('updateProductForm', false);
      this.sendAction('updateProduct', product, params)

    }

  }
});
