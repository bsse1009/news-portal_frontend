import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Viral News-24';
  isLogin: boolean = false;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.isLogin = this._auth.isUserLoggedIn();
  }

  

}
