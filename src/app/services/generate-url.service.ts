import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateUrlService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  saveUrlMapping(originalUrlDTO: any, language?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'language': language || ''
    });

    return this.http.post<any>(this.apiUrl, originalUrlDTO, { headers })
  }
}

export interface OriginalUrlDTO {
  url: string;
}

export interface UrlMapping {
  id: string;
  shortUrl: string;
  originalUrl: string;
}