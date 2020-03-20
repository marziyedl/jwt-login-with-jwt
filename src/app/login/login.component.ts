import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginHttpService } from './services/login-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  error:string = '';
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  constructor(private loginService: LoginHttpService,
    private route: ActivatedRoute,

    private router: Router,
  ) {
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit(userData) {
    if (this.loginForm.invalid) {
      this.loginForm.setErrors({
        ivalidtitle: true
      });
    } else {
      this.loginService.login(userData.username, userData.password).pipe(first()).subscribe((t) => {

        this.router.navigate([this.returnUrl]);
      }, error => {
       // console.log(error);
        this.error = error.error.message
      });

      
    }
  }
}


