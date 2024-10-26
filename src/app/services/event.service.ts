

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'https://crowdfind-backend.onrender.com/api/event';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }


  getEventById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }
  
  
}
