import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../service/auth.service';


/*
For email pattern validation: https://www.concretepage.com/angular-2/angular-2-4-email-validation-example
For component based error validation https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/#displaying-the-validation-error-message
For password pattern: https://www.mkyong.com/regular-expressions/how-to-validate-password-with-regular-expression/

*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})";
  ruleSet: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    /* declaring some rules 
    For tooltip ng bootstrap : https://ng-bootstrap.github.io/#/components/tooltip/api
    */
    this.ruleSet = `
     1) must contains one digit from 0-9  \n
     2) must contains one lowercase characters \n
     3) must contains one uppercase characters
     4) must contains one special symbols in the list "@#$%"
     5) length at least 6 characters and maximum of 20
    `;
  }

  ngOnInit() {
    /* to prevent showing nav bar when user tries unauthorized access to other pages */
    if (this.authService.isLoggedIn) {
         this.authService.setNavBar(false);    
    }
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  get getemail() {
    return this.loginForm.get('email');
  }

  get getpassword() {
    return this.loginForm.get('password');
  }

  submitForm(loginForm) {

    console.log('form submitted' + JSON.stringify(loginForm));
    let formData = loginForm;
    /* Setting email to model */
    LoginModel.email = formData.email;

    if (LoginModel.email != null && LoginModel.email.length > 0) {
      this.router.navigate(['/home']);
    }
  }

  signInWithGoogle() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    } else {
      this.authService.signInWithGoogle().then(
        (res) => {
          this.router.navigate(['home']);
        })
        .catch((err) => console.log(err));
    }
  }
}
