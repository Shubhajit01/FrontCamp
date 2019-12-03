import { MasterService } from "./../services/master.service";
import { Component, OnInit } from "@angular/core";
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: [
    "./news-details.component.css",
    "./news-details-responsive.component.css"
  ]
})
export class NewsDetailsComponent implements OnInit {
  leftArrow = faChevronCircleLeft;
  rightArrow = faChevronCircleRight;

  public newsDetails: any = {};

  constructor(private master: MasterService) {}

  ngOnInit() {
    this.master.clickedContinue = false;
    this.newsDetails = this.master.newsDetails;
  }

  goToMainSite(): void {
    window.location.href = this.newsDetails.mainSiteURL;
  }
}
