namespace MyApp.Services {
  export class ProductService {
    private products = [
      {id:1, name: 'laptop', price: 344.99},
      {id:2, name: 'tesla', price: 9994.99},
      {id:3, name: 'apple', price: 333.99}
    ];

    public list() {
      return this.products;
    }

    public get(id:number) {
      return this.products.filter((p) => p.id == id)[0];
    }
  }

  angular.module('MyApp').service('productService', ProductService);
}
