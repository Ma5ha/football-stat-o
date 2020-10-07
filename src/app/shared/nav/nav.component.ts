import { Component, OnInit, Input } from "@angular/core";
import { StandigsService } from "../services/standigs.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  @Input() scrollPos = "saa";

  prop;
  constructor(private standingService: StandigsService) {}

  ngOnInit(): void {
    this.standingService.getStandings().subscribe((x) => {
      this.prop = x;
    });
  }
}
