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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_js_1 = require("./hero.service.js");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService) {
        this.route = route;
        this.heroService = heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        template: "\n    <h3 highlight>Hero Detail</h3>\n    <div *ngIf=\"hero\">\n      <div>Id: {{hero.id}}</div><br>\n      <label>Name:\n        <input [(ngModel)]=\"hero.name\">\n      </label>\n    </div>\n    <br>\n    <a routerLink=\"../\">Hero List</a>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hero_service_js_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map