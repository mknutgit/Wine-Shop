import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  chosenVarietal: null,
  actions: {
    delete(product) {
      if (confirm('You sure?!')) {
        this.sendAction('destroyProduct', product);
      }
    },
    updateProductForm() {
     this.set('updateProductForm', true);
   },
    chooseVarietal () {
      this.set('chosenVarietal', event.target.value);
    },
    updateProduct(product) {
      var params = {
        producer: this.get('producer'),
        image: this.get('image'),
        description: this.get('description'),
        varietal: this.get('chosenVarietal'),
        cost: this.get('cost')
      };
      this.set('updateProductForm', false);
      this.sendAction('updateProduct', product, params);
    }
  }
});
