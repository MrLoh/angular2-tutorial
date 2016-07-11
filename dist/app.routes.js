"use strict";
var router_1 = require("@angular/router");
var _heroes_1 = require("./+heroes");
var routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    }, {
        path: "heroes",
        component: _heroes_1.HeroesComponent
    }, {
        path: "dashboard",
        component: _heroes_1.DashboardComponent
    }, {
        path: "detail/:id",
        component: _heroes_1.HeroDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
