import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalCost: Ember.computed('shoppingCart.items.[]', function() {
    var total= 0;
    for (var i= 0; i < this.get('shoppingCart.items.length'); i++) {
      total += this.get('shoppingCart.items')[i].get('cost');
    }
    return total;
  }),
  actions: {
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
