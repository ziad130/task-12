import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: '📚',
      title: 'Vast Collection',
      description: 'Access thousands of books across all genres and categories'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and special offers'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    },
    {
      icon: '⭐',
      title: 'Customer Reviews',
      description: 'Read honest reviews from fellow book lovers'
    },
    {
      icon: '🔍',
      title: 'Easy Search',
      description: 'Find exactly what you\'re looking for with our advanced search'
    },
    {
      icon: '❤️',
      title: 'Personalized',
      description: 'Get recommendations based on your reading preferences'
    }
  ];
}
