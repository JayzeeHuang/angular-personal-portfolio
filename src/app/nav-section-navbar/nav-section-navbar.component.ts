import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-section-navbar',
  templateUrl: './nav-section-navbar.component.html',
  styleUrls: ['./nav-section-navbar.component.css']
})
export class NavSectionNavbarComponent implements OnInit {

  constructor() { }

  hidden = true;
  ngOnInit(): void {
  }

  show(){
    return this.hidden = !this.hidden;
  }

}
