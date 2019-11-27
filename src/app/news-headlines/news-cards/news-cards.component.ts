import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { SourceNameTrackerService } from 'src/app/services/source-name-tracker.service.js';
import { Router } from '@angular/router';
import { AuthorizerService } from 'src/app/services/authorizer.service';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})

export class NewsCardsComponent implements OnInit {

  newsItems: any[];
  @Input() selectedSourceName: string;
  @Input() filteringWords: string;

  constructor(
    public source: SourceNameTrackerService,
    private router: Router,
    private authorizer: AuthorizerService
    ) { }
  
  ngOnInit() {
    // FETCH ALL data onload from API.
    this.fetchData('All');

    // INITIALIZE Variables.
    this.selectedSourceName = 'All';
    this.filteringWords = '';
  }

  fetchData(val: string): void {
    // FETCH India's News when ALL is SELECTED,
    // else FETCH selected news.
    if (val === 'All') {
      this.source.fetchDataFromAPI('country', 'in').subscribe((data: any) => {
        this.newsItems = data.articles;
      })
    } else {
      // Convert Name to ID.
      val = val.replace(/ /g, '-').toLowerCase();

      this.source.fetchDataFromAPI('sources', val).subscribe((data: any) => {
        this.newsItems = data.articles;
        console.log(this.newsItems);
      });
    }
  }

  // Pass NEWS as querParams when continue reading is clicked.
  passParams(news: any): void {
    this.authorizer.isClicked = true;
    let queryParam = {
        title: news.title,
        subtitle: news.publishedAt.substring(0, 10),
        sourceId: news.source.id,
        img: news.urlToImage,
        content: this.refine(news.content ? news.content : news.description),
        originalSiteURL: news.url
    };
    this.router.navigate(['/newsline'], {queryParams: queryParam});
  }

  // REMOVES unwanted trailing characters in the news content.
  refine(content: string): string {
    return content.replace(/\[.*\]$/, '');
  }
 
  // CHECK if the news contains entered filtering words.
  contains(news: any): boolean {
    return this.filteringWords === '' ||
            (news.description && news.description.includes(this.filteringWords)) ||
            news.title.includes(this.filteringWords) ||
            news.source.name.includes(this.filteringWords) ||
            (news.source.id && news.source.id.includes(this.filteringWords)) ||
            (news.content && news.content.includes(this.filteringWords));
  }

}
