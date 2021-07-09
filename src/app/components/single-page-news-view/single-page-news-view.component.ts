import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from "../../News";
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-single-page-news-view',
  templateUrl: './single-page-news-view.component.html',
  styleUrls: ['./single-page-news-view.component.css']
})
export class SinglePageNewsViewComponent implements OnInit {

  id: any;
  news: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => this.id = params.id
    );
    this.newsService.getNews(this.id).subscribe((news) => this.news = news);
  }

  

}
