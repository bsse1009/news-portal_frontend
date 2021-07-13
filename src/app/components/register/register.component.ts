import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.name) {
      alert('Please add your name!');
      return;
    }
    if (!this.email) {
      alert('Please add a email!');
      return;
    }
    if (!this.password) {
      alert('Please add a password!');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      type: 'user'
    };

    this._userService.addUser(newUser).subscribe((user)=> console.log(user));
    
    this.name = '';
    this.email = '';
    this.password = '';
  

  }

}
