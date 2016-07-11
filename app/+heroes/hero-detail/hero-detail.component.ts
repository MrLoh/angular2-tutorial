import { Component, OnInit, OnDestroy } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

import { Hero, HeroService } from "../shared"

@Component({
	selector: "my-hero-detail",
	templateUrl: "app/+heroes/hero-detail/hero-detail.component.html",
	styleUrls: ["dist/+heroes/hero-detail/hero-detail.component.css"]
})

export class HeroDetailComponent implements OnInit, OnDestroy {
	hero: Hero
	private sub: any

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let id = parseInt(params["id"])
			this.heroService.getHero(id).then(hero => {
				this.hero = hero
			})
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goBack(): void {
		window.history.back()
	}
}
