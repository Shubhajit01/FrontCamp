import { Component, OnInit, ViewChild } from '@angular/core';

import { NewsCardsComponent } from './news-cards/news-cards.component';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.css']
})
export class NewsHeadlinesComponent implements OnInit {

  filteringWords: string;

  // GRAB Child Component - NEWS_CARD
  @ViewChild(NewsCardsComponent, {static: false}) newsCard: NewsCardsComponent;
  

  constructor() { }

  ngOnInit() {
    
  }

  // This function will be called when dropdown is clicked,
  // which will call the FETCH method present in NEWS_CARD_COMPONENT
  // which will fetch new data from the new selected source.
  callNewsCardComponentFetch(event: any): void {
    this.newsCard.fetchData(event);
  }
  
}
