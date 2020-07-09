import { Component, OnInit, HostListener } from '@angular/core';
import { expandColapse } from '../animation/colapseExpand'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [expandColapse({})]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll')
  scrollHandler() {

    if (window.scrollY < 1) return true
    return false
  }

}
