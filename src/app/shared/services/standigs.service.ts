import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Club } from '../types/club';
import { Fixture } from '../types/fixture';



@Injectable({
  providedIn: 'root'
})


export class StandigsService {






  constructor(private standingsService: HttpClient) { }

  getStandings(): Observable<Club[]> {
    return this.standingsService.get<Club[]>(`${environment.apiBase}get_standings&league_id=148${environment.apiKey}`)
  }
  getFixtures(from: string, to: string): Observable<Fixture[]> {


    let get_events = `get_events&from=${from}&to=${to}&league_id`
    return this.standingsService.get<Fixture[]>(`${environment.apiBase}${get_events}&league_id=148${environment.apiKey}`)
  }

}
