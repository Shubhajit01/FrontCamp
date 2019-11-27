import { Component, Output, OnInit } from '@angular/core';
import { AuthorizerService } from './services/authorizer.service';
import { SourceNameTrackerService } from './services/source-name-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() public childSourceName: string;

  constructor(
    public authorizer: AuthorizerService,
    public source: SourceNameTrackerService
  ) { }
}
