import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: any;
  constructor(private fb: FormBuilder,
    private login: LoginService,
    private route: Router
  ) {
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    debugger
    this.login.onLogin(this.loginForm.value).subscribe((res) => {
      this.loginData = res;
      let jwt = this.loginData.token;
      localStorage.setItem('token', jwt);

      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)

      let isAdmin = decodedJwtData.admin

      console.log('jwtData: ' + jwtData)
      console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
      console.log('decodedJwtData: ' + decodedJwtData)
      console.log('Is admin: ' + isAdmin)
      this.route.navigate(['']);
    });

  }

}
