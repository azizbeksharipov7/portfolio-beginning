import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 2',
      description: 'This is a short description for card 2. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 3',
      description: 'This is a short description for card 3. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 4',
      description: 'This is a short description for card 4. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 5',
      description: 'This is a short description for card 5. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 6',
      description: 'This is a short description for card 6. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 7',
      description: 'This is a short description for card 7. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fweb-stories%2Ftrending%2Ftop-10-most-beautiful-places-on-earth-know-how-many-of-these-are-in-india-2023-05-16-870872&psig=AOvVaw1UFDdJrWB3SOtmf0M2Uod7&ust=1718301604193000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj94LjS1oYDFQAAAAAdAAAAABAE',
      title: 'Card Title 8',
      description: 'This is a short description for card 8. Lorem ipsum dolor sit amet.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}