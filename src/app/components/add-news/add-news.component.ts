import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from "../../News";
import { formatDate } from '@angular/common';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  @Output() onAddNews: EventEmitter<News> = new EventEmitter();
  title: string;
  news: string;
  image: string;
  today = new Date();
  time: string;
  showAddNews: boolean = false;
  subscription: Subscription;
  
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddNews = value);
    this.time = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.title) {
      alert('Please add a title of your news!');
      return;
    }

    if (!this.news) {
      alert('Please add a body of your news!');
      return;
    }

    const newNews = {
      title: this.title,
      details: this.news,
      image: this.image,
      date: this.time,
      comment: [{
        username:'',
        time: '',
        text:''
      }]
    };

    this.onAddNews.emit(newNews);

    this.title = '';
    this.news = '';
    this.image = '';
  }

}
