import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NewslineComponent } from './newsline/newsline.component';
import { AuthorizerService } from './services/authorizer.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "news-headlines",
    component: NewsHeadlinesComponent
  },
  {
    path: "add-article",
    component: AddArticleComponent
  },
  {
    path: "newsline",
    component: NewslineComponent,
    canActivate: [AuthorizerService]
  },
  {
    path: "",
    redirectTo: "/news-headlines",
    pathMatch: "full"
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
