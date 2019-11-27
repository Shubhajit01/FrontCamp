import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SourceNameTrackerService } from '../services/source-name-tracker.service';
import { AuthorizerService } from '../services/authorizer.service';

@Component({
  selector: 'app-newsline',
  templateUrl: './newsline.component.html',
  styleUrls: ['./newsline.component.css']
})
export class NewslineComponent implements OnInit {

  public news: any;

  constructor(
    public route: ActivatedRoute,
    public source: SourceNameTrackerService,
    private authorizer: AuthorizerService
  ) { }

  ngOnInit() {  
    // GET parameters present in URL.
    this.route.queryParams.subscribe((data: Object) => {
      this.news = data;
    })
    this.authorizer.isClicked = false;
  }

  // GOTO main site of the NEWS.
  redirect(url: string): void {
    window.location.href = url;
  }
}
