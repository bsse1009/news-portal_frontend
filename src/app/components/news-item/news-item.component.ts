import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from "../../News";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;
  @Output() onDeleteNews: EventEmitter<News> = new EventEmitter();
  firstLine: string;
  isAdmin: boolean;

  constructor(private _auth: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.firstLine = this.news.details.split(" ", 10).join(" ");
    this.isAdmin = this._auth.isAdminUser();
  }

  deleteNews(news: News)
  {
    this.onDeleteNews.emit(news);
  }

  hasRoute(route: string) {
    return this.router.url === route || this.router.url === '/';
  }

}
