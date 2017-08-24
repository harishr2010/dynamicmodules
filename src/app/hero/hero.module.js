"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_js_1 = require("../shared/shared.module.js");
var hero_component_js_1 = require("./hero.component.js");
var hero_detail_component_js_1 = require("./hero-detail.component.js");
var hero_list_component_js_1 = require("./hero-list.component.js");
var hero_routing_module_js_1 = require("./hero-routing.module.js");
var HeroModule = (function () {
    function HeroModule() {
    }
    return HeroModule;
}());
HeroModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_js_1.SharedModule, hero_routing_module_js_1.HeroRoutingModule],
        declarations: [
            hero_component_js_1.HeroComponent, hero_detail_component_js_1.HeroDetailComponent, hero_list_component_js_1.HeroListComponent,
        ]
    })
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map