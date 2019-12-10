import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { FooterComponent } from './footer/footer.component';
import { NewsCardComponent } from './news-headlines/news-card/news-card.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsHeadlinesComponent,
    FooterComponent,
    NewsCardComponent,
    AddArticleComponent,
    TruncatePipe,
    NewsDetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
