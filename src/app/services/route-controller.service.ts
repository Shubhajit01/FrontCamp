import { Router } from '@angular/router';
import { MasterService } from './master.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteControllerService {
  constructor(private master: MasterService, private router: Router) {}

  canActivate(): boolean {
    if (!this.master.clickedContinue) {
      this.router.navigate(['/news-headlines']);
      return false;
    }
    return true;
  }
}
