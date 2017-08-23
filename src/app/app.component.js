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
var AppComponent = (function () {
    // moduleLoader: SystemJsNgModuleLoader;
    function AppComponent(moduleLoader, injector, compile) {
        this.moduleLoader = moduleLoader;
        this.injector = injector;
        this.compile = compile;
        this.subtitle = '(Final)';
        // this.moduleLoader = new SystemJsNgModuleLoader(this.compile);
        var self = this;
        setTimeout(function () {
            var modulePath = 'app/hero/hero.module#HeroModule';
            if (modulePath) {
                self.moduleLoader.load(modulePath)
                    .then(function (moduleFactory) {
                    // when the module is successfully loaded, create the module factory and get all the components specified by this module
                    var ngModuleRef = moduleFactory.create(self.injector);
                    var test = ngModuleRef.injector.get(core_1.Component);
                    ngModuleRef.injector.get('Component').forEach(function (components) {
                        // for each specified component a component factory is created 
                        components.forEach(function (component) {
                            var compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component);
                            // if the components selector is found on the page it is bootstrapped at this point
                            if (document.querySelector(compFactory.selector)) {
                                // appRef.bootstrap(compFactory);
                            }
                        });
                    });
                });
            }
        }, 10000);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <app-title [subtitle]=\"subtitle\"></app-title>\n    <nav>\n      <a routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\n      <a routerLink=\"crisis\"  routerLinkActive=\"active\">Crisis Center</a>\n      <a routerLink=\"heroes\"  routerLinkActive=\"active\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [core_1.SystemJsNgModuleLoader,
        core_1.Injector,
        core_1.Compiler])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map