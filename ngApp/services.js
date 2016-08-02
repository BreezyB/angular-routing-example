var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService() {
                this.products = [
                    { id: 1, name: 'laptop', price: 344.99 },
                    { id: 2, name: 'tesla', price: 9994.99 },
                    { id: 3, name: 'apple', price: 333.99 }
                ];
            }
            ProductService.prototype.list = function () {
                return this.products;
            };
            ProductService.prototype.get = function (id) {
                return this.products.filter(function (p) { return p.id == id; })[0];
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('MyApp').service('productService', ProductService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
