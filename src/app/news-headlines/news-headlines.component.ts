import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.css']
})
export class NewsHeadlinesComponent implements OnInit {

  public selectedSource: string;
  public filteringWords: string;

  constructor() { }

  ngOnInit() {
  }

  
}
