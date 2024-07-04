import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';  // CV joylashgan manzil
    link.download = 'cv.pdf';      // Yuklab olinadigan fayl nomi
    link.click();
  }
}

