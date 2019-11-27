import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SourceNameTrackerService } from '../source-name-tracker.service';

@Component({
  selector: 'app-newsline',
  templateUrl: './newsline.component.html',
  styleUrls: ['./newsline.component.css']
})
export class NewslineComponent implements OnInit {

  public news;

  constructor(
    private route: ActivatedRoute,
    public source: SourceNameTrackerService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.news = params;
      this.source.sourceName = this.news.name;
    })
  }

  redirect(url: string) {
    window.location.href = url;
  }
}
