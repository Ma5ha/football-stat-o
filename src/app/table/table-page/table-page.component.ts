import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StandigsService } from 'src/app/shared/services/standigs.service';
import { Club } from 'src/app/shared/types/club';
import * as moment from 'moment';
import { Fixture } from 'src/app/shared/types/fixture';


@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],

})
export class TablePageComponent implements OnInit {


  season: string = `${moment().subtract(1, 'years').format('YY')}/${moment().format('YY')}`

  standings: Club[]



  selected

  date = moment()

  mondayFixures: Fixture[];
  tuesdayFixures: Fixture[]
  wednesdayFixures: Fixture[]
  thursdayFixures: Fixture[]
  fridayFixures: Fixture[]
  saturdayFixures: Fixture[]

  sundayFixtures: Fixture[]


  constructor(private standingsService: StandigsService) { }

  ngOnInit(): void {
    this.standingsService.getStandings().subscribe(
      result => { this.standings = result },
      error => { console.error(error) }



    )


    this.getMondayFixures()
    this.getTuesdayFixures()
    this.getWednesdayFixures()
    this.getThursdayFixures()
    this.getFridayFixtures()
    this.getSaturdayFixtures()
    this.getSundayFixtures()


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



  getMondayFixures(): void {

    let monday = moment().isoWeekday(1).format("YYYY-MM-DD")
    this.standingsService.getFixtures(monday).subscribe(fixtures => {
      this.mondayFixures = fixtures





    })



  }


  getTuesdayFixures(): void {

    let tuesday = moment().isoWeekday(2).format("YYYY-MM-DD")
    this.standingsService.getFixtures(tuesday).subscribe(fixtures => {
      this.tuesdayFixures = fixtures


    })



  }

  getWednesdayFixures(): void {

    let wednesday = moment().isoWeekday(3).format("YYYY-MM-DD")
    this.standingsService.getFixtures(wednesday).subscribe(fixtures => {
      this.wednesdayFixures = fixtures


    })



  }
  getThursdayFixures(): void {

    let thursday = moment().isoWeekday(4).format("YYYY-MM-DD")
    this.standingsService.getFixtures(thursday).subscribe(fixtures => {
      this.thursdayFixures = fixtures


    })



  }

  getFridayFixtures(): void {

    let friday = moment().isoWeekday(5).format("YYYY-MM-DD")
    this.standingsService.getFixtures(friday).subscribe(fixtures => {
      this.fridayFixures = fixtures




    })



  }
  getSaturdayFixtures(): void {

    let saturday = moment().isoWeekday(6).format("YYYY-MM-DD")
    this.standingsService.getFixtures(saturday).subscribe(fixtures => {
      this.saturdayFixures = fixtures



    })



  }

  getSundayFixtures(): void {

    let sunday = moment().isoWeekday(7).format("YYYY-MM-DD")
    this.standingsService.getFixtures(sunday).subscribe(fixtures => {
      this.sundayFixtures = fixtures



    })



  }

  typeCheck(prop): boolean {
    return prop instanceof Array
  }


}

