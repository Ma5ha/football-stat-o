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

  lineups = {
    home: {
      badge: '',
      team: '',

      coach: {},
      lineup: [],
      formation: '',
      subs: []
    },
    away: {
      badge: '',

      team: '',
      lineup: [],
      formation: '',
      subs: [],
      coach: {},

    }

  }

  matchCentre = {
    goalscorers: [],
    cards: [],
    round: '',
    stadium: '',
    referee: '',
    substitutions: {
      away: [],
      home: []
    },
    score: ''


  }


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



  //for delete 



  getMatch() {
    this.standingsService.getMatchEvent(this.activatedRoute.snapshot.params.id)
      .subscribe(x => {
        console.log(x[0]
        )

        this.lineups.away.formation = x[0].match_awayteam_system
        this.lineups.home.formation = x[0].match_hometeam_system
        this.lineups.home.lineup = sortPlayersToUnits(x[0].lineup.home.starting_lineups, x[0].match_hometeam_system)
        this.lineups.away.lineup = sortPlayersToUnits(x[0].lineup.away.starting_lineups, x[0].match_awayteam_system)
        console.log(this.lineups.away.lineup)
        this.lineups.home.subs = x[0].lineup.home.substitutes
        this.lineups.away.subs = x[0].lineup.away.substitutes
        this.lineups.home.coach = x[0].lineup.home.coach
        this.lineups.away.coach = x[0].lineup.away.coach
        this.lineups.home.team = x[0].match_hometeam_name
        this.lineups.away.team = x[0].match_awayteam_name
        this.lineups.home.badge = x[0].team_home_badge
        this.lineups.away.badge = x[0].team_away_badge

        this.matchCentre.goalscorers = x[0].goalscorer
        this.matchCentre.cards = x[0].cards
        this.matchCentre.round = x[0].match_round
        this.matchCentre.referee = x[0].match_referee

        this.matchCentre.stadium = x[0].match_stadium
        this.matchCentre.substitutions.home = x[0].substitutions.home
        this.matchCentre.substitutions.away = x[0].substitutions.away
        this.matchCentre.score = x[0].match_hometeam_score + `:` + x[0].match_awayteam_score

      }
      )






    // matchCentre= {
    //   goalscorers: [],
    //   cards: [],
    //   round: '',
    //   stadium: '',
    //   referee: '',
    //   substitutions: {
    //     away: [],
    //     home: []
    //   },
    //   score: ''


    // }

  }
}


function sortPlayersToUnits(players: any[], formation: string) {

  players = sortByLineUpPosition(players)


  let formationArray = [1]
  formation.split('-').forEach(x => formationArray.push(parseInt(x)))
  let array = []

  formationArray.forEach(x => {
    let unit = players.slice(0, x)
    players.splice(0, x)
    array.push(unit)
  })


  return array


}

function sortByLineUpPosition(players: any[]) {
  players.sort((playerA, playerB) => {
    if (parseInt(playerA.lineup_position) < parseInt(playerB.lineup_position)) {
      return -1;
    }
    if (parseInt(playerA.lineup_position) > parseInt(playerB.lineup_position)) {
      return 1;
    }

    return 0;
  }

  )


  return players
}
