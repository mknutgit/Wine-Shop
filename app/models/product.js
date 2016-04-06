import DS from 'ember-data';

export default DS.Model.extend({
  producer: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  varietal: DS.attr(),
  cost: DS.attr('number')
});
