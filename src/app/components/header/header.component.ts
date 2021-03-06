import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Viral News-24';
  isLogin: boolean;
  showAddNews: boolean = false;
  subscription: Subscription;
  isAdmin: boolean;
  search: string = '';
  @Output() searchKey = new EventEmitter();

  constructor(
      private _auth: AuthService,
      private uiService: UiService,
      private router: Router
    ) {
        this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddNews = value);
      }

  ngOnInit(): void {
    this.isLogin = this._auth.isUserLoggedIn();
    this.isAdmin = this._auth.isAdminUser();
  }

  toogleAddNews() {
    this.uiService.toggleAddNews();
  }

  isLogedIn():boolean{
    this.ngOnInit();
    return this.isLogin;
  }

  logOut(){
    this._auth.logoutUser();
    this.router.navigate(['/']);
  }

  hasNotRoute(route: string) {
    return this.router.url !== route;
  }
  
  hasRoute(route: string) {
    return this.router.url == route;
  }

  onSubmit(){
    this.searchKey.emit(this.search);
    this.search = '';
  }

}
