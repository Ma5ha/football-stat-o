import { Component, OnInit } from '@angular/core';
import { StandigsService } from 'src/app/shared/services/standigs.service';
import { Club } from 'src/app/shared/types/club';
import { isFunction } from 'util';


@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {


  standings: Club[]

  constructor(private standingsService: StandigsService) { }

  ngOnInit(): void {
    this.standingsService.getStandings().subscribe(
      result => { this.standings = result },
      error => { console.error(error) }
    )






  }
  reverseStandings(): void {
    this.standings.sort(
      (clubA, clubB) => {
        return parseInt(clubA.overall_league_position) - parseInt(clubB.overall_league_position)

      })

  }

  sortByName(): void {




    this.standings.sort(
      (clubA, clubB) => {
        if (clubA.team_name.toUpperCase() < clubB.team_name.toUpperCase()) return -1
        if (clubA.team_name.toUpperCase() > clubB.team_name.toUpperCase()) return 1
        return 0

      })





  }
  sortByMostPlayed() {
    this.standings.sort(
      (clubA, clubB) => {
        if (clubA.overall_league_payed < clubB.overall_league_payed) return 1
        if (clubA.overall_league_payed > clubB.overall_league_payed) return -1
        return 0

      })


  }

  sortByMostWins() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_W) - parseInt(clubB.overall_league_W)
      })
    this.standings.reverse()
  }

  sortByMostDraws() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_D) - parseInt(clubB.overall_league_D)
      })
    this.standings.reverse()

  }
  sortByMostLoses() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_L) - parseInt(clubB.overall_league_L)
      })
    this.standings.reverse()


  }
  sortByGoalsFor() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_GF) - parseInt(clubB.overall_league_GF)
      })
    this.standings.reverse()


  }
  sortByGoalsAlowed() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_GA) - parseInt(clubB.overall_league_GA)
      })
    this.standings.reverse()


  }

  sortByPts() {
    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_PTS) - parseInt(clubB.overall_league_PTS)
      })
    this.standings.reverse()



  }

}

