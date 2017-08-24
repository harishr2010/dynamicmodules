import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module.js';

import { HeroComponent }       from './hero.component.js';
import { HeroDetailComponent } from './hero-detail.component.js';
import { HeroListComponent }   from './hero-list.component.js';
import { HeroRoutingModule }   from './hero-routing.module.js';

@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
  ]
})
export class HeroModule { }
