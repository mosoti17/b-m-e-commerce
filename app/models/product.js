import DS from 'ember-data';

export default DS.Model.extend({
  //added attributes for product model
  name: DS.attr(),
  price: DS.attr(),
  images: DS.attr(),
  categories: DS.attr(),
  stockAmount: DS.attr(),
  discount: DS.attr(),
});
