import { Component, OnInit } from '@angular/core';
import { SourceNameTrackerService } from '../source-name-tracker.service';

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.css']
})

export class SourceNameComponent implements OnInit {


  constructor(
    public source: SourceNameTrackerService
  ) { }

  ngOnInit() {
  }

}
