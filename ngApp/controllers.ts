namespace MyApp.Controllers {
   export class Page1Controller {

   }

   export class Page2Controller {

   }

   export class AdminController {

   }

   angular.module('MyApp').controller('AdminController', AdminController);

   let products = [
     {id:1, name: 'laptop', price: 344.99},
     {id:2, name: 'tesla', price: 9994.99},
     {id:3, name: 'apple', price: 333.99}
   ]

   export class ProductsController {
     public products = products;
   }

   export class ProductDetailsController {
     public product;

     constructor($stateParams: ng.ui.IStateService) {
       console.log($stateParams);
       this.product = products.filter((p) => p.id == $stateParams['id'])[0];
     }
   }
}
