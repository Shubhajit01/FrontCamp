import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SourceNameTrackerService } from 'src/app/source-name-tracker.service';

@Component({
  selector: 'app-utilbar',
  templateUrl: './utilbar.component.html',
  styleUrls: ['./utilbar.component.css']
})
export class UtilbarComponent implements OnInit {
  public sourceList: string[];
  @Output() public utilSource = new EventEmitter();
  @Output() public enteredWords = new EventEmitter();

  constructor(
    public source: SourceNameTrackerService
  ) { }

  ngOnInit() {
    this.sourceList = [
      'All',
      'Focus',
      'BBC News',
      'National Geographic',
      'The Telegraph',
      'The Times of India',
      'CNBC',
      'Buzzfeed',
      'ESPN',
      'IGN',
      'New Scientist'
    ].sort();
  }

  change(source: string) {
    this.source.sourceName = source;
    console.log(this.source.sourceName)
    this.utilSource.emit(source);
  }
  
  filterNewsCards(event) {
    this.enteredWords.emit(event.path[1].parentNode.childNodes[0].value);
  }
}
