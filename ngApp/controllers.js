var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var Page1Controller = (function () {
            function Page1Controller() {
            }
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller() {
            }
            return Page2Controller;
        }());
        Controllers.Page2Controller = Page2Controller;
        var AdminController = (function () {
            function AdminController() {
            }
            return AdminController;
        }());
        Controllers.AdminController = AdminController;
        angular.module('MyApp').controller('AdminController', AdminController);
        var ProductsController = (function () {
            function ProductsController(productService) {
                this.products = productService.list();
            }
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams, productService) {
                var id = $stateParams['id'];
                this.product = productService.get(id);
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
