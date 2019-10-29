import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NewslineComponent } from './newsline/newsline.component';


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
    component: NewslineComponent
  },
  {
    path: "",
    redirectTo: "/news-headlines",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
