import Ember from 'ember';

export default Ember.Component.extend({
  products: Ember.computed('filterByVarietal', function () {
    var products = this.get('model');
    var output=[];
    if (this.get('filterByVarietal') === "all") {
      return products;
    } else {
      var self = this;
      products.forEach( function (product) {
        if (product.get('varietal') === self.get('filterByVarietal')) {
          output.push(product);
        }
      });
      return output;
    }
  }),
  filterByVarietal: "all",
  actions: {
    selectVarietal() {
      this.set('filterByVarietal', event.target.value);
    }
  }

});
