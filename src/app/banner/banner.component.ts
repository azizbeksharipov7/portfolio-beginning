import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  hoverEffect(event: any) {
    event.target.style.opacity = event.type === 'mouseenter' ? '0.8' : '1';
  }
}
