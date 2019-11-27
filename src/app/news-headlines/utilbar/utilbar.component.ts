import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SourceNameTrackerService } from 'src/app/services/source-name-tracker.service';

@Component({
  selector: 'app-utilbar',
  templateUrl: './utilbar.component.html',
  styleUrls: ['./utilbar.component.css']
})
export class UtilbarComponent implements OnInit {

  @Output() dropDownEmitter: EventEmitter<string> = new EventEmitter();
  @Output() filterClicked: EventEmitter<string> = new EventEmitter();

  constructor(
    public source: SourceNameTrackerService
  ) { }

  ngOnInit() {
  }

  // EMIT selected sourceName
  // & change Name of the source in service. 
  dropDownClicked(sourceName: string): void {
    this.dropDownEmitter.emit(sourceName);
    this.source.setSourceName(sourceName);
  }

  // EMIT the enteredWords in filter input box.
  filterNewsCards(event: any): void {
    let value = event.path[2].firstChild.value;
    this.filterClicked.emit(value);
  }

}
