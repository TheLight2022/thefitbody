var app = angular.module('MyApp',["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/home",{
        templateUrl: "views/home.html",
        controller : "HomeController"
    })
    .when("/about",{
        templateUrl: "views/about.html",
        controller : "AboutController"
    })
    .when("/my-program",{
        templateUrl: "views/my-program.html",
        controller : "MyProgramController"
    })
    .when("/calorie-calculator",{
        templateUrl: "views/calorie-calculator.html",
        controller : "CalorieCalculatorControler"
    })
    .when("/contact",{
        templateUrl: "views/contact.html",
        controller : "ContactController"
    })
})