import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/bookstore', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://twitter.com/bookstore', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: 'https://instagram.com/bookstore', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/bookstore', icon: 'fab fa-linkedin' }
  ];
}
