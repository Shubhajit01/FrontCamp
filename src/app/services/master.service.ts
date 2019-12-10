import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private sourceNameTracker$: Subject<string> = new Subject<string>();
  public sourceName$: Observable<
    string
  > = this.sourceNameTracker$.asObservable();

  public newsDetails: any = {};
  public clickedContinue = false;

  constructor(private http: HttpClient) {}

  fetchData(url: string): Observable<any> {
    return this.http.get(url);
  }

  printTest() {
    console.log('Test Successfull');
  }

  setSourceName(value: string): void {
    this.sourceNameTracker$.next(value);
  }
}
