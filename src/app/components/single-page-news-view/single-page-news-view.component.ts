import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from "../../News";
import { NewsService } from "../../services/news.service";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-single-page-news-view',
  templateUrl: './single-page-news-view.component.html',
  styleUrls: ['./single-page-news-view.component.css']
})
export class SinglePageNewsViewComponent implements OnInit {

  id: any;
  news: News;
  comment: string;
  isLogin: boolean;
  today = new Date();
  time:string;
  showUpdateNews: boolean = false;
  subscription: Subscription;
  isAdmin: boolean;

  constructor(
      private route: ActivatedRoute, 
      private newsService: NewsService,
      private auth: AuthService,
      private uiService: UiService,
      private router: Router
    ) {
        this.time = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
        this.subscription = this.uiService.onToggle().subscribe((value) => this.showUpdateNews = value);
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => this.id = params.id
    );
    this.newsService.getNews(this.id).subscribe((news) => this.news = news);
    this.isLogin = this.auth.isUserLoggedIn();
    this.isAdmin = this.auth.isAdminUser();
  }

  onSubmit(){
    if(!this.comment){
      alert('Please add a Comment!');
      return;
    }
    console.log(this.comment);
    const newComment = {
      username: this.auth.username,
      time: this.time,
      text: this.comment
    };
    this.news.comment?.push(newComment);
    this.newsService.updateNews(this.news).subscribe();

    this.comment = '';
  }

  toggleUpdateNews()
  {
    this.uiService.toggleUpdateNews();
  }

  hasRoute(): boolean{
    return this.router.url !== '/' && this.router.url !== '/login' && this.router.url !== '/register';
  }

  updateNews(news: any){
    if(news.title !== ''){
      this.news.title = news.title;
    }

    if (news.details !== '') {
      this.news.details = news.details;
    }
    
    if (news.image !== '') {
      this.news.image = news.image;
    }
    this.newsService.updateNews(this.news).subscribe();
  }

}
