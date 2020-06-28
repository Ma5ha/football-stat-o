import { Component, OnInit } from '@angular/core';
import { rotateInAnimation, slideInDownOnEnterAnimation } from 'angular-animations';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, flipOnEnterAnimation } from 'angular-animations';
@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [flipOnEnterAnimation(), slideInDownOnEnterAnimation(), rotateInAnimation({ anchor: 'rotate', duration: 10000, delay: 1000 }), fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 1000 })]
})
export class HomePageComponent implements OnInit {

  prop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  constructor() { }

  ngOnInit(): void {
  }


  t = false



}
