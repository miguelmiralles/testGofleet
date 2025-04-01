import { Component, signal } from '@angular/core';

@Component({
  selector: 'gofleet-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  tabActive = signal('submissions');

  updateNavActive(tab: string) {
    this.tabActive.set(tab);
    // TODO Navigate to the tab
  }
}
