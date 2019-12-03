import { RouteControllerService } from './services/route-controller.service';
import { AddArticleComponent } from "./add-article/add-article.component";
import { NewsHeadlinesComponent } from "./news-headlines/news-headlines.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/news-headlines",
    pathMatch: "full"
  },
  {
    path: "news-headlines",
    component: NewsHeadlinesComponent
  },
  {
    path: "add-article",
    component: AddArticleComponent
  },
  {
    path: "news-details",
    component: NewsDetailsComponent,
    canActivate: [RouteControllerService]
  },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
