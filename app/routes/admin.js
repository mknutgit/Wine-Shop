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
    }
  }  
});
