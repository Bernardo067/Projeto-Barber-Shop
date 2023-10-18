import { User } from '../model/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';  // Importe throwError
import { catchError } from 'rxjs/operators';  // Importe catchError

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'https://localhost:7155/api/users';

  constructor(private http: HttpClient){}

  criarUsuario(user: User): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.url}`, user, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro desconhecido';

        if (error.status === 400) {
          errorMessage = 'Dados de registro inválidos';
        } else if (error.status === 409) {
          errorMessage = 'O usuário já está registrado';
        } else if (error.status === 0) {
          errorMessage = 'Não foi possível se conectar ao servidor';
        }
        return throwError(errorMessage);
      })
    );
  }
}
