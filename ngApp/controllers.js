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
        var products = [
            { id: 1, name: 'laptop', price: 344.99 },
            { id: 2, name: 'tesla', price: 9994.99 },
            { id: 3, name: 'apple', price: 333.99 }
        ];
        var ProductsController = (function () {
            function ProductsController() {
                this.products = products;
            }
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams) {
                console.log($stateParams);
                this.product = products.filter(function (p) { return p.id == $stateParams['id']; })[0];
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
