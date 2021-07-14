import { Component, OnInit } from '@angular/core';
import { News } from "../../News";
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewses().subscribe((newses)=> this.newses = newses);
  }

  addNews(news: News) {
    this.newsService.addNews(news).subscribe((news) => this.newses.push(news));
  }

}
