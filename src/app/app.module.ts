import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SourceNameComponent } from './source-name/source-name.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UtilbarComponent } from './news-headlines/utilbar/utilbar.component';
import { NewsCardsComponent } from './news-headlines/news-cards/news-cards.component';
import { NewslineComponent } from './newsline/newsline.component';
import { SourceNameTrackerService } from './source-name-tracker.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SourceNameComponent,
    NewsHeadlinesComponent,
    AddArticleComponent,
    UtilbarComponent,
    NewsCardsComponent,
    NewslineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SourceNameTrackerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
