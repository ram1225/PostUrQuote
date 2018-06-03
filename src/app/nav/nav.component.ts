import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() navItems: string[];
  constructor() { }

  public isCollapsed = true;
  
  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
   }

}
