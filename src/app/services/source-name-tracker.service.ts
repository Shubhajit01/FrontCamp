import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SourceNameTrackerService {
  
  private sourceName: string = 'News Headlines';

  // CONSTANTS
  private API_KEY: string = '003af5ea57da439c858fe64adb9253b4';
  public SOURCE_LIST: string[] = [
    'All', 'Focus', 'BBC News', 'National Geographic',
    'The Telegraph', 'The Times of India', 'CNBC',
    'Buzzfeed', 'ESPN', 'IGN', 'New Scientist'].sort();
  
  constructor(
    private http: HttpClient
  ) { }

  // SETTER for sourceName
  setSourceName(newSource: string): void {
    this.sourceName = newSource;
  }  

  // GETTER for sourceName
  getSourceName(): string {
    return this.sourceName;
  }
  
  // Helps in FETCHING data from API.
  fetchDataFromAPI(parameter: string, value: string): Observable<any> {
    let url = `https://newsapi.org/v2/top-headlines?${parameter}=${value}&apiKey=${this.API_KEY}`;
    return this.http.get(url);
  }

}
