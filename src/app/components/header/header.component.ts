import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Viral News-24';
  isLogin: boolean;

  constructor(
      private _auth: AuthService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.isLogin = this._auth.isUserLoggedIn();
  }

  isLogedIn():boolean{
    this.ngOnInit();
    return this.isLogin;
  }

  logOut(){
    this._auth.logoutUser();
    this.router.navigate(['home']);
  }

}
