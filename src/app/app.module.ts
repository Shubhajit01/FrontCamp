// Import MODULES.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import COMPONENTS.
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SourceNameComponent } from './source-name/source-name.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UtilbarComponent } from './news-headlines/utilbar/utilbar.component';
import { NewsCardsComponent } from './news-headlines/news-cards/news-cards.component';
import { NewslineComponent } from './newsline/newsline.component';

// Import SERVICES.
import { SourceNameTrackerService } from './services/source-name-tracker.service';
import { AuthorizerService } from './services/authorizer.service';

// Import PIPES.
import { TruncatePipe } from './pipes/truncate.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    NewslineComponent,
    TruncatePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SourceNameTrackerService,
    AuthorizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
