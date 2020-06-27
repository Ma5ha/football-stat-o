import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }), fadeOutOnLeaveAnimation()]
})
export class AppComponent {
  title = 'footballStats';
  s

  scroll(event) {

    this.s = event.pageY

    // console.log(window.scrollY)
  }
}
