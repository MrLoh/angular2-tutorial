import { provideRouter, RouterConfig } from "@angular/router"

import { HeroesComponent, DashboardComponent, HeroDetailComponent } from "./+heroes"

const routes: RouterConfig = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    }, {
        path: "heroes",
        component: HeroesComponent
    }, {
        path: "dashboard",
        component: DashboardComponent
    }, {
        path: "detail/:id",
        component: HeroDetailComponent
    }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
