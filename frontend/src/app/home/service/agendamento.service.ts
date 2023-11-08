import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Agendamento } from '../model/agendamento';




@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiUrl = 'https://localhost:7155/api/agendamento/criar';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  agendarHorario(agendamento: Agendamento): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    

    return this.http.post(`${this.apiUrl}`, agendamento, httpOptions).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
