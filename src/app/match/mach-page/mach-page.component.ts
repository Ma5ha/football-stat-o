import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandigsService } from 'src/app/shared/services/standigs.service';



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
    this.getMatch()


  }

  getMatchStatistic() {


    this.standingsService.getMatchStatisticBy(this.activatedRoute.snapshot.params.id).subscribe(
      response => {
        this.statistics = response[this.matchID.toString()].statistics.map(x => {

          return {


            name: x.type,
            series: [
              {
                statType: x.type,
                name: 'home',
                value: (parseInt(x.home) / (parseInt(x.home) + parseInt(x.away))) * 100,
                normalValue: x.home
              },
              {
                statType: x.type,
                name: 'away',
                value: (parseInt(x.away) / (parseInt(x.home) + parseInt(x.away))) * 100,
                normalValue: x.away
              }

            ]



          }






        })

        console.log(this.statistics)

      }
    )

  }


  format(value) {

    return `${value}%`

  }
  //for delete 



  getMatch() {
    this.standingsService.getMatchEvent(this.activatedRoute.snapshot.params.id)
      .subscribe(x => {
        console.log(x[0])
      })
  }




}


