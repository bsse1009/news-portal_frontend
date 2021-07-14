import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddNews: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddNews(): void {
    this.showAddNews = !this.showAddNews;
    this.subject.next(this.showAddNews);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}