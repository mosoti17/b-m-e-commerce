import Ember from 'ember';

export default Ember.Component.extend({
  shopingCart: Ember.inject.service(),
  actions:{
    removeItem(item){
      this.get('shopingCart').remove(item);
    }
  }
});
