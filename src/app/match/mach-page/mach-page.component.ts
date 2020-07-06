import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandigsService } from 'src/app/shared/services/standigs.service';


import { StatisticsEntity } from '../../shared/types/statistics';

@Component({
  selector: 'app-mach-page',
  templateUrl: './mach-page.component.html',
  styleUrls: ['./mach-page.component.scss']
})
export class MachPageComponent implements OnInit {
  statistics

  matchID = this.activatedRoute.snapshot.params.id
  constructor(private activatedRoute: ActivatedRoute, private standingsService: StandigsService) { }

  ngOnInit(): void {
    this.getMatchStatistic()


  }

  getMatchStatistic() {


    this.standingsService.getMatchStatisticBy(this.activatedRoute.snapshot.params.id).subscribe(
      response => {
        this.statistics = response[this.matchID.toString()].statistics.map(x => {

          return {
            name: x.type,
            series: [
              {
                name: 'home',
                value: x.home
              },
              {
                name: 'away',
                value: x.away
              }
            ]

          }






        })

        console.log(this.statistics)

      }
    )

  }

}
