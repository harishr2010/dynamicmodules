import { Component, SystemJsNgModuleLoader, NgModuleFactory, Injector, Type, Compiler } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
      <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(Final)';
  // moduleLoader: SystemJsNgModuleLoader;

  constructor(
    private moduleLoader: SystemJsNgModuleLoader,
    private injector: Injector,
    private compile: Compiler) {

    // this.moduleLoader = new SystemJsNgModuleLoader(this.compile);
    let self = this;

    setTimeout(() => {
      const modulePath: string = 'app/hero/hero.module#HeroModule';
      if (modulePath) {
        self.moduleLoader.load(modulePath)
          .then((moduleFactory: NgModuleFactory<any>) => {
            // when the module is successfully loaded, create the module factory and get all the components specified by this module
            const ngModuleRef = moduleFactory.create(self.injector);
            let test = ngModuleRef.injector.get(Component);
            ngModuleRef.injector.get('Component').forEach((components: Type<{}>[]) => {
              // for each specified component a component factory is created 
              components.forEach((component: Type<{}>) => {
                const compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component);
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

}
