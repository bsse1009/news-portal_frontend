import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // isLogin: boolean;
  username: string;
  password: string;
  retUrl: any;

  constructor(
      private authService: AuthService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.retUrl = this.activatedRoute.snapshot.queryParams['retUrl'] || '/';

    // this.activatedRoute.queryParamMap
    //   .subscribe(params => {
    //     this.retUrl = params.get('retUrl');
    //   });
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(data => {
      if (this.retUrl != null && data) {
        this.router.navigateByUrl(this.retUrl);
      } else {
        this.router.navigate(['login']);
      }
    });
    this.username = '';
    this.password = '';
  }

}
