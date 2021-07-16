import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { SinglePageNewsViewComponent } from './components/single-page-news-view/single-page-news-view.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'details', component: SinglePageNewsViewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    NewsComponent,
    NewsItemComponent,
    SinglePageNewsViewComponent,
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    AddNewsComponent
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
