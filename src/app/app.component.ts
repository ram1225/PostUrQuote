import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sections: string[] = ["Dashboard", "Followers", "Following", "Settings"];
  routerLinks: string[] = ["dashboard", "dashboard", "dashboard", "dashboard"];
  currentRoute: any;
  loginRoute: boolean;
  showNav: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.showNav.subscribe((showNav) => {
      this.showNav = showNav;
    });
  }
}
