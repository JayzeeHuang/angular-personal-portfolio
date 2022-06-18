import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let options = {
      strings: ['','Full-Stack developer', 'WEB developer','Mobile developer'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    let typed = new Typed('.typed', options);
    typed.reset(true)
  }
  

}
