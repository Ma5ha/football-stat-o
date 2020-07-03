import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandigsService } from 'src/app/shared/services/standigs.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {


  team
  players
  coach

  constructor(private activatedRoute: ActivatedRoute, private standingsService: StandigsService) { }

  ngOnInit(): void {



    this.getClub()
  }


  clubId(): number {
    return this.activatedRoute.snapshot.params.id
  }

  getClub() {
    this.standingsService.getTeam(this.clubId()).subscribe(result => {
      this.team = result
      this.players = result[0].players
      this.coach = result[0].coaches[0]
      console.table(result)

    })
  }
}
