import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Club } from '../types/club';

@Injectable({
  providedIn: 'root'
})


export class StandigsService {

  constructor(private standingsService: HttpClient) { }

  getStandings(): Observable<Club[]> {
    return this.standingsService.get<Club[]>(`${environment.apiBase}get_standings&league_id=148${environment.apiKey}`)
  }


}
