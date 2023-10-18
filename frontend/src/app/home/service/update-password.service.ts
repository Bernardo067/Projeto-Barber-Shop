import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UpdatePasswordRequest } from '../model/updatePasswordRequest';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {
  private apiUrl = 'https://localhost:7155/api/users/updatepassword';
  

  constructor(private http: HttpClient) {}

  redefinirSenha(updatePasswordRequest: UpdatePasswordRequest): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    

    return this.http.post<any>(`${this.apiUrl}`, updatePasswordRequest, httpOptions)
  }
}
