import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/*
For email pattern validation: https://www.concretepage.com/angular-2/angular-2-4-email-validation-example
For component based error validation https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/#displaying-the-validation-error-message
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', 
      [Validators.required, Validators.minLength(5),Validators.maxLength(10)])
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
