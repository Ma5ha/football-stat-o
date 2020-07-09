import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tactic-board',
  templateUrl: './tactic-board.component.html',
  styleUrls: ['./tactic-board.component.scss']
})
export class TacticBoardComponent implements OnInit {



  @Input()
  home
  @Input()
  away

  constructor() { }

  ngOnInit(): void {
  }

}
