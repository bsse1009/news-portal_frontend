import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddNews: boolean = false;
  private showUpdateNews: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddNews(): void {
    this.showAddNews = !this.showAddNews;
    this.subject.next(this.showAddNews);
  }

  toggleUpdateNews(): void {
    this.showUpdateNews = !this.showUpdateNews;
    this.subject.next(this.showUpdateNews);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}