import { Component, OnInit } from '@angular/core';
import { StandigsService } from 'src/app/shared/services/standigs.service';
import { Club } from 'src/app/shared/types/club';
import * as moment from 'moment';


@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {


  standings: Club[]

  todayFixtures

  selected

  constructor(private standingsService: StandigsService) { }

  ngOnInit(): void {
    this.standingsService.getStandings().subscribe(
      result => { this.standings = result },
      error => { console.error(error) }



    )






  }
  reverseStandings(): void {

    if (this.selected === 'r') {
      this.standings.reverse()
      return
    }

    this.standings.sort(
      (clubA, clubB) => {
        return parseInt(clubA.overall_league_position) - parseInt(clubB.overall_league_position)

      })
    this.selected = 'r'

  }

  sortByName(): void {

    if (this.selected === 'team') {
      this.standings.reverse()
      return
    }


    this.standings.sort(
      (clubA, clubB) => {
        if (clubA.team_name.toUpperCase() < clubB.team_name.toUpperCase()) return -1
        if (clubA.team_name.toUpperCase() > clubB.team_name.toUpperCase()) return 1
        return 0

      })

    this.selected = 'team'




  }
  sortByMostPlayed() {

    if (this.selected === 'p') {
      this.standings.reverse()
      return
    }

    this.standings.sort(
      (clubA, clubB) => {
        if (clubA.overall_league_payed < clubB.overall_league_payed) return 1
        if (clubA.overall_league_payed > clubB.overall_league_payed) return -1
        return 0

      })
    this.selected = 'p'


  }

  sortByMostWins() {


    if (this.selected === 'w') {
      this.standings.reverse()
      return
    }

    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_W) - parseInt(clubB.overall_league_W)
      })
    this.standings.reverse()
    this.selected = 'w'
  }

  sortByMostDraws() {

    if (this.selected === 'd') {
      this.standings.reverse()
      return
    }


    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_D) - parseInt(clubB.overall_league_D)


      })
    this.standings.reverse()
    this.selected = 'd'

  }
  sortByMostLoses() {


    if (this.selected === 'l') {
      this.standings.reverse()
      return
    }


    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_L) - parseInt(clubB.overall_league_L)
      })
    this.standings.reverse()
    this.selected = 'l'

  }
  sortByGoalsFor() {


    if (this.selected === 'gf') {
      this.standings.reverse()
      return
    }


    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_GF) - parseInt(clubB.overall_league_GF)
      })
    this.standings.reverse()
    this.selected = 'gf'

  }
  sortByGoalsAlowed() {


    if (this.selected === 'ga') {
      this.standings.reverse()
      return
    }



    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_GA) - parseInt(clubB.overall_league_GA)
      })
    this.standings.reverse()
    this.selected = 'ga'

  }

  sortByPts() {

    if (this.selected === 'pts') {
      this.standings.reverse()
      return
    }



    this.standings.sort(
      (clubA, clubB) => {
        // if (clubA.overall_league_W < clubB.overall_league_W) return 1
        // if (clubA.overall_league_W > clubB.overall_league_W) return -1
        // return 0

        return parseInt(clubA.overall_league_PTS) - parseInt(clubB.overall_league_PTS)
      })
    this.standings.reverse()

    this.selected = 'pts'

  }

  getTodayFixtures() {
    let today = (moment().format("YYYY-MM-DD"))
    this.standingsService.getFixtures(today, today).subscribe(fixtures => {
      this.todayFixtures = fixtures
    },
      error => {

      })

  }

}

