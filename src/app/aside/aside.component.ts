import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  public userName: string;
  public email: string;

  constructor() { }

  ngOnInit() {
    this.userName = LoginModel.username;
    this.email = LoginModel.email;
  }

}
