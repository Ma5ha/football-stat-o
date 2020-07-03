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

  constructor(private activatedRoute: ActivatedRoute, private standingsService: StandigsService) { }

  ngOnInit(): void {
    let r = this.activatedRoute.snapshot.params
    console.log(r.id)


    this.standingsService.getTeam(r.id).subscribe(
      r => {
        this.team = r
        // console.table(this.team[0].players)
        console.table(r)
      }
    )
  }


}
