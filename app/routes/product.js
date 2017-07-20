import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('product',params.product_id);
  },
  actions: {
    addReview(params){
      var newReview = this.store.createRecord('review', params);
      var model = params.product;
      model.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return model.save();

      });
      this.transitionTo('product', product);
    },
    updateProduct(product, params){
      Object.keys(params).forEach(function (key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      })
      product.save();
      this.transitionTo('product', product);
    }
  }

});
