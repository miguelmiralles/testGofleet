import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'gofleet-layout',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  template: `
      <gofleet-header></gofleet-header>
      <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {

}
