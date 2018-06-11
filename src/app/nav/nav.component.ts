import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() navItems: string[];
  @Input() navLinks: string[];
  constructor(private router: Router, public authService: AuthService) { }

  public isCollapsed = true;
  
  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
   }

   navigate(index){
  
    this.router.navigate(["/"+this.navLinks[index]]);
   }
}
