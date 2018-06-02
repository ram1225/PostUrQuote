import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) {
    /* declaring some rules 
    For tooltip ng bootstrap : https://ng-bootstrap.github.io/#/components/tooltip/api
    */
    this.ruleSet= `
     1) must contains one digit from 0-9  \n
     2) must contains one lowercase characters \n
     3) must contains one uppercase characters
     4) must contains one special symbols in the list "@#$%"
     5) length at least 6 characters and maximum of 20
    `;
  }

  ngOnInit() {
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

  }


}
