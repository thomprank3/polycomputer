app = angular.module("admin-app", ["ngRoute"]);

app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "/admin/main-content.html"
    })
    //product
    .when("/product", {
        templateUrl: "/admin/product-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-product", {
        templateUrl: "/admin/product-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-product", {
        templateUrl: "/admin/product-form-new.html",
        // controller: "product-ctrl"
    })
    //category
    .when("/category", {
        templateUrl: "/admin/category-2/index.html",
        controller: "category-ctrl"
    })
    // .when("/edit-category", {
    //     templateUrl: "/admin/category/category-form-edit.html",
    //     controller: "category-ctrl"
    // })
    .when("/add-category", {
        templateUrl: "/admin/category/category-form-new.html",
        controller: "category-ctrl"
    })
    //brand
    .when("/brand", {
        templateUrl: "/admin/brand-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-brand", {
        templateUrl: "/admin/brand-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-brand", {
        templateUrl: "/admin/brand-form-new.html",
        // controller: "product-ctrl"
    })
    //ram
    .when("/ram", {
        templateUrl: "/admin/ram-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-ram", {
        templateUrl: "/admin/ram-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-ram", {
        templateUrl: "/admin/ram-form-new.html",
        // controller: "product-ctrl"
    })
    //brand
    .when("/cpu", {
        templateUrl: "/admin/cpu-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-cpu", {
        templateUrl: "/admin/cpu-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-cpu", {
        templateUrl: "/admin/cpu-form-new.html",
        // controller: "product-ctrl"
    })
    //cpu-serie
    .when("/cpu-serie", {
        templateUrl: "/admin/cpu-serie-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-cpu-serie", {
        templateUrl: "/admin/cpu-serie-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-cpu-serie", {
        templateUrl: "/admin/cpu-serie-form-new.html",
        // controller: "product-ctrl"
    })
    //brand
    .when("/brand", {
        templateUrl: "/admin/brand-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-brand", {
        templateUrl: "/admin/brandy-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-brand", {
        templateUrl: "/admin/brand-form-new.html",
        // controller: "product-ctrl"
    })
    //brand
    .when("/brand", {
        templateUrl: "/admin/brand-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-brand", {
        templateUrl: "/admin/brandy-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-brand", {
        templateUrl: "/admin/brand-form-new.html",
        // controller: "product-ctrl"
    })
    //brand
    .when("/brand", {
        templateUrl: "/admin/brand-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-brand", {
        templateUrl: "/admin/brandy-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-brand", {
        templateUrl: "/admin/brand-form-new.html",
        // controller: "product-ctrl"
    })
    //brand
    .when("/brand", {
        templateUrl: "/admin/brand-table.html",
        // controller: "product-ctrl"
    })
    .when("/edit-brand", {
        templateUrl: "/admin/brandy-form-edit.html",
        // controller: "product-ctrl"
    })
    .when("/add-brand", {
        templateUrl: "/admin/brand-form-new.html",
        // controller: "product-ctrl"
    })
    .otherwise({
        redirectTo:"/"
    })
})