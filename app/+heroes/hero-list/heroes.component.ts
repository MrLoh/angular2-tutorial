import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

import { Hero, HeroService } from "../shared"

@Component({
	selector: "my-heroes",
	templateUrl: "dist/+heroes/hero-list/heroes.component.html" ,
	styleUrls: ["dist/+heroes/hero-list/heroes.component.css"]
})

export class HeroesComponent implements OnInit {
	heroes: Hero[]
	selectedHero: Hero

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	ngOnInit() {
		this.getHeroes()
	}

	getHeroes(): void {
		this.heroService.getHeroes()
		.then( heroes => {
			this.heroes = heroes
		})
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero
	}

	gotoDetail() {
		this.router.navigate(["/detail", this.selectedHero.id])
	}
}
