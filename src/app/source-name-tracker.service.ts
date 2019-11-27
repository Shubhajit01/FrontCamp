import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SourceNameTrackerService {
  public sourceName: string = 'News Headlines';

  constructor() { }

  set(val: string) {
    this.sourceName = val;
  }
}
