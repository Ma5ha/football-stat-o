import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {

  selected

  @Input()
  players
  constructor() { }

  ngOnInit(): void {
  }



  sortByAge() {

    if (this.selected == 'age') {
      this.players.reverse()
      return
    }

    this.players.sort((a, b) => {
      if (a.player_age < b.player_age) {
        return -1;
      }
      if (a.player_age > b.player_age) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })

    this.selected = 'age'
  }



  sortByShirtNumber() {


    if (this.selected == 'shirtNumber') {
      this.players.reverse()
      return
    }

    this.players.sort((player1, player2) => {
      if (parseInt(player1.player_number) < parseInt(player2.player_number)) {
        return -1;
      }
      if (parseInt(player1.player_number) > parseInt(player2.player_number)) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })

    this.selected = 'shirtNumber'

  }

  sortByGoals() {

    if (this.selected == 'goals') {
      this.players.reverse()
      return
    }

    this.players.sort((player1, player2) => {
      if (parseInt(player1.player_goals) < parseInt(player2.player_goals)) {
        return 1;
      }
      if (parseInt(player1.player_goals) > parseInt(player2.player_goals)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    this.selected = 'goals'

  }

  sortByYellowCards() {

    if (this.selected == 'yellow') {
      this.players.reverse()
      return
    }

    this.players.sort((player1, player2) => {
      if (parseInt(player1.player_yellow_cards) < parseInt(player2.player_yellow_cards)) {
        return 1;
      }
      if (parseInt(player1.player_yellow_cards) > parseInt(player2.player_yellow_cards)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    this.selected = 'yellow'

  }
  sortByRedCards() {

    if (this.selected == 'red') {
      this.players.reverse()
      return
    }

    this.players.sort((player1, player2) => {
      if (parseInt(player1.player_red_cards) < parseInt(player2.player_red_cards)) {
        return 1;
      }
      if (parseInt(player1.player_red_cards) > parseInt(player2.player_red_cards)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    this.selected = 'red'

  }

}
