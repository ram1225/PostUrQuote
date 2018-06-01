import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {  
   }

  ngOnInit() {
    this.createForm();
  }

 

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
         validators: [Validators.required,Validators.email],
         updateOn: 'blur'
      }),
      password: new FormControl(null, [Validators.required])
   }, {updateOn: 'submit'})
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.loginForm); //{7}
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
}
