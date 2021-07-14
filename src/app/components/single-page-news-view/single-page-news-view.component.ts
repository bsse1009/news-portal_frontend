import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from "../../News";
import { NewsService } from "../../services/news.service";
import { AuthService } from "../../services/auth.service";
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

  constructor(
      private route: ActivatedRoute, 
      private newsService: NewsService,
      private auth: AuthService
    ) {
        this.time = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => this.id = params.id
    );
    this.newsService.getNews(this.id).subscribe((news) => this.news = news);
    this.isLogin = this.auth.isUserLoggedIn();
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

}
