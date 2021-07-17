import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from "../../News";
import { formatDate } from '@angular/common';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {
  @Output() onUpdateNews: EventEmitter<News> = new EventEmitter();
  title: string;
  body: string;
  image: string;
  today = new Date();
  time: string;
  showUpdateNews: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showUpdateNews = value);
    this.time = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newNews = {
      title: this.title,
      details: this.body,
      image: this.image,
      date: this.time,
      comment: [{
        username: '',
        time: '',
        text: ''
      }]
    };

    this.onUpdateNews.emit(newNews);

    this.title = '';
    this.body = '';
    this.image = '';
  }

}
