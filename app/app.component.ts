import { Component } from "@angular/core"
import { ROUTER_DIRECTIVES } from "@angular/router"

import { HeroService } from "./hero.service"
import { HeroesComponent } from "./heroes.component"

@Component({
    selector: "app",
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['/heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = "Tour of Heroes"
}
