import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { RouteControllerService } from './services/route-controller.service';
import { AddArticleComponent } from './add-article/add-article.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'news-headlines',
    component: NewsHeadlinesComponent,
    canActivate: [LoginService]
  },
  {
    path: 'add-article',
    component: AddArticleComponent,
    canActivate: [LoginService]
  },
  {
    path: 'news-details',
    component: NewsDetailsComponent,
    canActivate: [RouteControllerService, LoginService]
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
