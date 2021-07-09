import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuardService } from "./services/auth-guard.service";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { SinglePageNewsViewComponent } from './components/single-page-news-view/single-page-news-view.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'home', component: NewsComponent },
  { path: 'details', component: SinglePageNewsViewComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SearchBarComponent,
    NewsComponent,
    NewsItemComponent,
    SinglePageNewsViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
