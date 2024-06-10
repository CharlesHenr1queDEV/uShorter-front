import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService {

  private apiUrl = 'http://localhost:8080/'; // Substitua pela URL do seu endpoint

  constructor(private http: HttpClient) { }

  findQuantityClick(shortUrl: any, language?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'language': language || '',
      'shortUrl': shortUrl
    });
    //Aqui temos um problema eu tava usando somente o código para ser minha shortUrl, porém isso pode causar um problema
    return this.http.get<any>(this.apiUrl + 'url-click', { headers })
  }
}
