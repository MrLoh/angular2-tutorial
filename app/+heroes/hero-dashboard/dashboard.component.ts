import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

import { Hero, HeroService } from "../shared"

@Component({
    selector: "my-dashboard",
    templateUrl: "app/+heroes/hero-dashboard/dashboard.component.html",
    styleUrls: ["app/+heroes/hero-dashboard/dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = []

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit() {
        this.heroService.getHeroes()
        .then(heroes => {
            this.heroes = heroes.slice(1, 5)
        })
    }

    gotoDetail(hero: Hero): void {
        let link = ["/detail", hero.id]
        this.router.navigate(link)
    }
}
