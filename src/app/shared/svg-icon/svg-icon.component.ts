import { Component, input } from '@angular/core';

@Component({
  selector: 'gofleet-svg-icon',
  standalone: true,
  template: `<img [src]="'assets/icons/' + name() + '.svg'" [alt]="name()">`,
  styles: [`
    :host { 
      display: flex; 
      align-items: center;
      justify-content: center;
      width: var(--icon-width, 24px); 
      height: var(--icon-height, 24px); 
    }
  `],
  host: {
    '[style.--icon-width.px]': 'width()',
    '[style.--icon-height.px]': 'height()'
  }
})
export class SvgIconComponent {
  name = input.required<string>();
  width = input<string>('24');
  height = input<string>('24');
}
