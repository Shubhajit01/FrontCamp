import { Component, OnInit, Input } from '@angular/core';
import { data } from "../../content.js";
import { SourceNameTrackerService } from 'src/app/source-name-tracker.service.js';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {

  public newsDatas;
  @Input() sourceName: string;
  @Input() filterWords: string;

  constructor(
    public source: SourceNameTrackerService
  ) { }

  ngOnInit() {
    this.newsDatas = JSON.parse(data);
    this.sourceName = 'All';
    this.filterWords = null;
  }

  refine(content: string) {
    if (!content.endsWith("]")) {
      return content;
    } 
    while (!content.endsWith("[")) {
      content = content.slice(0, -1);
    }
    content = content.slice(0, -1);
    return content
  }

  isCorrectNewsChannel(newsName: string) {
    return newsName === this.sourceName || this.sourceName === 'All';
  }

  containsFilterWords(description: string, title: string) {
    return !this.filterWords || description.includes(this.filterWords) || 
            title.includes(this.filterWords);
  }

  getParams(ob) {
    return {
      'img': ob.urlToImage,
      'title': ob.title,
      'subtitle': ob.publishedAt.substring(0, 10),
      'sourceId': ob.source.id,
      'name': ob.source.name,
      'content': this.refine(ob.content ? ob.content : ob.description),
      'originalSiteURL': ob.url
    };
  }
}
