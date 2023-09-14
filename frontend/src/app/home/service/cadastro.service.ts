import { Usuario } from './../model/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'http://localhost:8080/api/registration';

  constructor(private http: HttpClient) { }

  register(request: Usuario): Observable<string> {
    const apiUrl = `${this.url}`;

    return this.http.post<string>(apiUrl, request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro ao registrar o usuário';

        if (error.status === 400) {
          errorMessage = 'Dados de registro inválidos';
        } else if (error.status === 409) {
          errorMessage = 'O usuário já está registrado';
        }
        return throwError(errorMessage);
      })
    );
  }
}


