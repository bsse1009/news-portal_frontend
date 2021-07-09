import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from "../../News";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;
  @Output() detailNews: EventEmitter<News> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(News: News){
    this.detailNews.emit(News);
  }

}
