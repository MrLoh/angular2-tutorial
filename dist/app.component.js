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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"let hero of heroes\"\n\t\t\t\t(click)=\"onSelect(hero)\"\n\t\t\t\t[class.selected]=\"hero === selectedHero\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span>\n\t\t\t\t{{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ngIf=\"selectedHero\">\n\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t<div>\n\t\t\t<label>id: </label>\n\t\t\t{{selectedHero.id}}\n\t\t</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n\t\t</div>\n\t\t</div>\n\n\t",
            styles: [".selected{background-color:#CFD8DC!important;color:#fff}.heroes{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.heroes li{cursor:pointer;position:relative;left:0;background-color:#EEE;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.heroes li.selected:hover{background-color:#BBD8DC!important;color:#fff}.heroes li:hover{color:#607D8B;background-color:#DDD;left:.1em}.heroes .text{position:relative;top:-3px}.heroes .badge{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:coral;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
