import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean = false;
  userType: string;
  users: User[] = [];
  
  constructor(private _userService: UserService) { }

  login(username: string, password: string) {
    this._userService.getUsers().subscribe((users)=> this.users = users);
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      const name = user.name;
      const pass = user.password;
      if(username == name && password == pass)
      {
        this.isloggedIn = true;
        this.userType = user.type;
        break;
      }
    }
    if (!this.isloggedIn) {
      alert("please enter valid user name and password!")
    }
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userType == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }

}
