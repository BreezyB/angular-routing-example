namespace MyApp.Controllers {
   export class Page1Controller {

   }

   export class Page2Controller {

   }

   export class AdminController {

   }

   angular.module('MyApp').controller('AdminController', AdminController);

   export class ProductsController {
     public products;
     constructor (productService: MyApp.Services.ProductService) {
       this.products = productService.list();
     }
   }

   export class ProductDetailsController {
     public product;

     constructor(
       $stateParams: ng.ui.IStateService,
       productService: MyApp.Services.ProductService
     ) {
      let id = $stateParams['id'];
      // this.product =
      this.product = productService.get(id);
     }
   }
}
