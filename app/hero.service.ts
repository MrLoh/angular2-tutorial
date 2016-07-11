import { Injectable } from "@angular/core"

import { HEROES } from "./mock-heroes"

@Injectable()
export class HeroService {
	getHeroes(): Thenable<Hero[]> {
        return Promise.resolve(HEROES)
        // return new Promise<Hero[]>(resolve => {
        //     setTimeout(() => resolve(HEROES), 2000)
        // })
	}
}
