import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findQuantityClick(shortUrl: any, language?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'language': language || '',
      'shortUrl': shortUrl
    });
    return this.http.get<any>(this.apiUrl + 'url-click', { headers })
  }
}
