import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { Component, RootRenderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-aggregator';

  constructor(private login: LoginService) {}
}
