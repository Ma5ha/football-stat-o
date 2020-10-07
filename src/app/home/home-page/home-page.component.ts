import { Component, OnInit } from '@angular/core';
import { flipInYOnEnterAnimation, fadeOutAnimation } from 'angular-animations';
import { slideInLeftOnEnterAnimation, } from 'angular-animations';
import { StandigsService } from '../../shared/services/standigs.service'
import { Router } from '@angular/router';


@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeOutAnimation(), flipInYOnEnterAnimation(), slideInLeftOnEnterAnimation(),]
})
export class HomePageComponent implements OnInit {

  // prop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  prop
  constructor(private standingService: StandigsService, private s: Router) { }

  ngOnInit(): void {
    this.standingService.getStandings().subscribe(
      x => {
        this.prop = x
        console.log(x)

      }
    )
  }

  team

  r = false

  clickHandler(p) {

    this.team = p.team_id
    setTimeout(() => {
      this.s.navigate([`${p.team_name}/${p.team_id}`])
    }, 1000)



  }

}
