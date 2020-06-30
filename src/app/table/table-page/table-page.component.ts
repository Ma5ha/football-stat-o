import { Component, OnInit } from '@angular/core';
import { StandigsService } from 'src/app/shared/services/standigs.service';
import { Club } from 'src/app/shared/types/club';


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
  reverseStandings() {
    this.standings = this.standings.reverse()
  }

}
