import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Club } from '../types/club';
import { Fixture } from '../types/fixture';
import { Statistics } from '../types/statistics';



@Injectable({
  providedIn: 'root'
})


export class StandigsService {






  constructor(private standingsService: HttpClient) { }

  getStandings(): Observable<Club[]> {
    return this.standingsService.get<Club[]>(`${environment.apiBase}get_standings&league_id=148${environment.apiKey}`)
  }
  getFixtures(date: string): Observable<Fixture[]> {


    let get_events = `get_events&from=${date}&to=${date}&league_id`
    return this.standingsService.get<Fixture[]>(`${environment.apiBase}${get_events}&league_id=148${environment.apiKey}`)
  }

  getTeam(teamId: number): Observable<any> {


    return this.standingsService.get(`${environment.apiBase}get_teams&team_id=${teamId}${environment.apiKey}`)
  }
  getMatchStatisticBy(matchId: number): Observable<Statistics[]> {
    return this.standingsService.get<Statistics[]>(`${environment.apiBase}get_statistics&match_id=${matchId}${environment.apiKey}`)
  }
}
