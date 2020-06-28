import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandigsService {

  constructor(private standingsService: HttpClient) { }

  getTeamsCrests() {
    this.standingsService
  }


}
