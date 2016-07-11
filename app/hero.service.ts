import { Injectable } from "@angular/core"

import { Hero } from "./hero"
import { HEROES } from "./mock-heroes"

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES)
        // return new Promise<Hero[]>(resolve => {
        //     setTimeout(() => resolve(HEROES), 2000)
        // })
	}

	getHero(id: number): Promise<Hero> {
		let hero = HEROES.find(hero => hero.id === id)
		return Promise.resolve(hero)
		// return this.getHeroes().then(heroes => {
		// 	heroes.find(hero => hero.id === id)
		// })
	}
}
