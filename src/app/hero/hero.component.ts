// Exact copy except import UserService from core
import { Component }   from '@angular/core';

import { HeroService } from './hero.service.js';
import { UserService } from '../core/user.service.js';

@Component({
  // template: `
  //   <h2>Heroes of {{userName}}</h2>
  //   <router-outlet></router-outlet>
  // `,
  template:`
  <div>Testing dynamic loading of components</div>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
