import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow () {
      this.set('addNewProduct', true);
    },
    addProduct() {
      var params = {
        producer: this.get('producer') ? this.get('producer'): "",
        image: this.get('image') ? this.get('image'): "",
        description: this.get('description') ? this.get('description'): "",
        varietal: this.get('varietal') ? this.get('varietal'): "",
        cost: this.get('cost') ? this.get('cost'): ""
    };
    this.set('addNewProduct', false);
    this.sendAction('addProduct', params);
    }
  }
});
