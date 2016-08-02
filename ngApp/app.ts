namespace MyApp {
  angular.module('MyApp', ['ui.router']).config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
  ) => {
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: 'ngApp/page1.html',
      controller: MyApp.Controllers.Page1Controller,
      controllerAs: 'vm'
    }).state('Page1', {
      url: '/page1',
      templateUrl: 'ngApp/page1.html',
      controller: MyApp.Controllers.Page1Controller,
      controllerAs: 'vm'
    }).state('Page2', {
      url: '/page2',
      templateUrl: 'ngApp/page2.html',
      controller: MyApp.Controllers.Page2Controller,
      controllerAs: 'vm'
    }).state('ProductList', {
      url: '/products',
      templateUrl: 'ngApp/products.html',
      controller: MyApp.Controllers.ProductsController,
      controllerAs: 'vm'
    }).state('ProductDetails', {
      url: '/productDetails/:id',
      templateUrl: 'ngApp/productDetails.html',
      controller: MyApp.Controllers.ProductDetailsController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
