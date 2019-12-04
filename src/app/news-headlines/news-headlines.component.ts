import { MasterService } from './../services/master.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { SOURCES_URL, API_KEY } from '../model/const.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: [
    './news-headlines.component.css',
    './news-headlines-responsive.component.css'
  ]
})
export class NewsHeadlinesComponent implements OnInit {
  private defaultAllValue = { name: 'All', id: 'all' };

  public newsSourceList: { name: string; id: string }[] = [
    this.defaultAllValue
  ];

  public newsDatas: any[];
  public filteredList: any[];
  public loading = true;

  constructor(private master: MasterService, private router: Router) {}

  ngOnInit() {
    this.master.clickedContinue = false;
    this.storeSourceList();
    this.getNewsData('all');
    this.master.setSourceName(this.defaultAllValue.name);
  }

  // FETCH the source list from the API and
  // assign that to the newsSourceList
  storeSourceList(): void {
    this.master.fetchData(SOURCES_URL).subscribe((data: any) => {
      for (const source of data.sources) {
        this.newsSourceList.push({ name: source.name, id: source.id });
      }
    });
  }

  // FETCH the selected news channel data from the API and
  // assign that to the newsDatas
  getNewsData(source: string): void {
    const url = `https://newsapi.org/v2/top-headlines?${
      source === 'all' ? 'country=in' : `sources=${source}`
    }&apiKey=${API_KEY}`;

    this.loading = true;
    this.master.fetchData(url).subscribe((data: any) => {
      this.filteredList = data.articles;
      this.newsDatas = this.filteredList;
      this.loading = false;
    });
  }

  // When clicked on an option in select
  // CHANGE the selected source id to
  // the news one and refetch the data.
  changeNewsSource(selectedValueID: number): void {
    const [sourceName, sourceID] = [
      this.newsSourceList[selectedValueID].name,
      this.newsSourceList[selectedValueID].id
    ];

    this.master.setSourceName(sourceName);

    this.getNewsData(sourceID);
  }

  openArticleCreation(): void {
    this.master.setSourceName('Add Article');
    this.router.navigate(['/add-article']);
  }

  onFilter(filterWords: string): void {
    this.filteredList = this.newsDatas;
    const pattern = new RegExp(filterWords, 'i');
    this.filteredList = this.filteredList.filter(news => {
      return !filterWords || pattern.test(`${news.title} ${news.content}`);
    });
  }
}
