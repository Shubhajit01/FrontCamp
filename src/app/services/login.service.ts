import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUser: { userName: string; isAdmin: boolean } = {
    userName: '',
    isAdmin: false
  };

  private logStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isLoggedIn$: Observable<boolean> = this.logStatus.asObservable();

  private loggedUser: Subject<any> = new Subject<any>();
  public loggedUser$: Observable<any> = this.loggedUser.asObservable();

  private loginStatus = false;
  constructor(private router: Router) {
    this.isLoggedIn$.subscribe((logStatus: boolean) => {
      this.loginStatus = logStatus;
    });
  }

  getUserName() {
    console.log(this.currentUser.userName);
    return this.currentUser.userName;
  }

  getIsAdmin() {
    return this.currentUser.isAdmin;
  }

  login(...givenCredentails) {
    // Check if User has entered correct credentials.
    if (givenCredentails[0] === 'user' && givenCredentails[1] === 'user') {
      this.loggedUser.next({ userName: 'user', isAdmin: false });
      this.logStatus.next(true);
      return true;
    } else if (
      givenCredentails[0] === 'root' &&
      givenCredentails[1] === 'root'
    ) {
      this.loggedUser.next({ userName: 'root', isAdmin: true });
      this.logStatus.next(true);
      console.log(this.currentUser);
      return true;
    }
    return false;
  }

  canActivate(): boolean {
    if (!this.loginStatus) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  logout(): void {
    this.logStatus.next(false);
    this.router.navigate(['/login']);
  }
}
