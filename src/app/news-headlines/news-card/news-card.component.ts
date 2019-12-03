import { Router } from '@angular/router';
import { MasterService } from './../../services/master.service';
import { Component, OnInit, Input } from "@angular/core";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: [
    "./news-card.component.css",
    "./news-card-responsive.component.css"
  ]
})
export class NewsCardComponent implements OnInit {
  @Input()
  public news: any;

  constructor(
    private master: MasterService,
    private router: Router
  ) {}

  ngOnInit() {}

  content(): string {
    return this.news.content ? this.news.content : this.news.description;
  }

  onContinueReading(): void {
    this.master.newsDetails = {
      imageURL: this.news.urlToImage,
      title: this.news.title,
      subtitle: this.news.publishedAt,
      content: this.content(),
      mainSiteURL: this.news.url
    }
    this.master.clickedContinue = true;
    this.router.navigate(['/news-details'])
  }
}
