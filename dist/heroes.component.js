"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var hero_detail_component_1 = require("./hero-detail.component");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: "my-heroes",
            template: "\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"let hero of heroes\"\n\t\t\t\t(click)=\"onSelect(hero)\"\n\t\t\t\t[class.selected]=\"hero === selectedHero\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span>\n\t\t\t\t{{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<my-hero-detail [hero]=\"selectedHero\">\n\t\t</my-hero-detail>\n\t",
            styles: [".selected{background-color:#CFD8DC!important;color:#fff}.heroes{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.heroes li{cursor:pointer;position:relative;left:0;background-color:#EEE;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.heroes li.selected:hover{background-color:#BBD8DC!important;color:#fff}.heroes li:hover{color:#607D8B;background-color:#DDD;left:.1em}.heroes .text{position:relative;top:-3px}.heroes .badge{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:coral;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px}"],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;