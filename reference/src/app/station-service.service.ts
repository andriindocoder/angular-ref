import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {
  token = 'J3tqQJjSwv986wrg6T8WR7l-oWrEqHHl';
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.token}`),
  }

  constructor(
    private http: HttpClient
    ) { }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>('http://mrt-webapp-api.freeddns.org/v1/station', this.header);
  }

  createStations(station: Station): Observable<Station> {
    return this.http.post<Station>('http://mrt-webapp-api.freeddns.org/v1/station', station, this.header);
  }

  getStation(id: number): Observable<any> {
    return this.http.get(`http://mrt-webapp-api.freeddns.org/v1/station/${id}`, this.header);
  }

  updateStation(id: number, value: any): Observable<object> {
    return this.http.put<Station>(`http://mrt-webapp-api.freeddns.org/v1/station/${id}`, value, this.header);
  }

  deleteStation(id: number): Observable<any> {
    return this.http.delete(`http://mrt-webapp-api.freeddns.org/v1/station/${id}`, this.header);
  }
}