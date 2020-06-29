import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})


export class StandigsService {

  constructor(private standingsService: HttpClient) { }

  getStandings() {
    return this.standingsService.get(`${environment.apiBase}get_standings&league_id=148${environment.apiKey}`)
  }


}
