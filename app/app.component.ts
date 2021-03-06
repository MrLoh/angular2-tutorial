import { Component } from "@angular/core"
import { ROUTER_DIRECTIVES } from "@angular/router"

import { HeroService } from "./+heroes"

@Component({
	selector: "app",
	templateUrl: "dist/app.component.html",
	styleUrls: ["dist/app.component.css"],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService
	]
})

export class AppComponent {
	title = "Tour of Heroes"
}
