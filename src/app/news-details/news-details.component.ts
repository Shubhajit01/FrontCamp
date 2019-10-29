import { MasterService } from './../services/master.service';
import { Component, OnInit } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCalendarAlt,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { COMMENTS_URL } from '../model/const.js';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: [
    './news-details.component.css',
    './news-details-responsive.component.css'
  ]
})
export class NewsDetailsComponent implements OnInit {
  leftArrow = faChevronCircleLeft;
  rightArrow = faChevronCircleRight;
  calendarIcon = faCalendarAlt;
  commentIcon = faComment;

  toggleComments = 'Show';
  isCommentClicked = false;
  countOfComments = '20';
  commentsArray = [];

  public newsDetails: any = {};

  constructor(private master: MasterService) {}

  ngOnInit() {
    this.master.clickedContinue = false;
    this.newsDetails = this.master.newsDetails;
    console.log(this.newsDetails);
    this.master.fetchData(COMMENTS_URL).subscribe((comments: any) => {
      this.commentsArray = comments;
    });
  }

  goToMainSite(): void {
    window.location.href = this.newsDetails.mainSiteURL;
  }

  onComments(): void {
    this.toggleComments = this.toggleComments === 'Hide' ? 'Show' : 'Hide';
    this.isCommentClicked = !this.isCommentClicked;
  }
}
