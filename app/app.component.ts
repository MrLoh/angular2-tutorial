import { Component } from "@angular/core"
import { ROUTER_DIRECTIVES } from "@angular/router"

import { HeroService } from "./hero.service"
import { HeroesComponent } from "./heroes.component"

@Component({
	selector: "app",
	templateUrl: "app/app.component.html",
	styleUrls: ["app/app.component.css"],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService
	]
})

export class AppComponent {
	title = "Tour of Heroes"
}
