import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Fixture } from 'src/app/shared/types/fixture';


@Component({
  selector: 'app-fixtures-table',
  templateUrl: './fixtures-table.component.html',
  styleUrls: ['./fixtures-table.component.scss'],


})
export class FixturesTableComponent {

  @Input()
  fixtures: Fixture[]

  @Input()
  date: string

  constructor() { }


}
