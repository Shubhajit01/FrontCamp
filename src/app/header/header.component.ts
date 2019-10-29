import { LoginService } from './../services/login.service';
import { MasterService } from './../services/master.service';
import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sourceName = 'News Headlines';
  public isLoggedIn: boolean;

  public userIcon = faUserCircle;

  public userName = '';
  public isAdmin = false;

  constructor(private master: MasterService, private login: LoginService) {}

  ngOnInit() {
    this.master.sourceName$.subscribe((source: string) => {
      this.sourceName = source === 'All' ? 'News Headlines - India' : source;
    });

    this.login.isLoggedIn$.subscribe((logStatus: boolean) => {
      this.isLoggedIn = logStatus;
    });

    this.login.loggedUser$.subscribe((userData: any) => {
      this.userName = userData.userName;
      this.isAdmin = userData.isAdmin;
    });
  }

  onLogout(): void {
    this.login.logout();
  }
}
