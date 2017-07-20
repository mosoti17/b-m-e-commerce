import DS from 'ember-data';

export default DS.Model.extend({
  //added attributes for product model
  name: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  category: DS.attr(),
  stockAmount: DS.attr(),
  discount: DS.attr(),
  reviews: DS.hasMany('review',{async:true})
});
