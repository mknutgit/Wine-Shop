import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    addProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      // debugger;
      this.transitionTo('admin');
    },
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin');
    },
    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          product.set(key, params[key]);
        }
      });
      product.save();
      this.transitionTo('admin');
    }
  }
});
