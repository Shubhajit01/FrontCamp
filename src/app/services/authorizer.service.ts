import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizerService {
  public isClicked: boolean;
  public error: boolean = false;

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.isClicked) {
      return true;
    } else {
      this.router.navigate(['/page-not-found']);
      this.error = true;
      return false;
    }
  }

  resetError(): void {
    this.error = false;
  }
}
