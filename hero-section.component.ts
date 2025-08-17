import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  featuredBooks = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      price: '$12.99'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      price: '$14.99'
    },
    {
      title: '1984',
      author: 'George Orwell',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
      price: '$13.99'
    }
  ];
}
