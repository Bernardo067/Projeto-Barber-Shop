import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly url = 'http://localhost:8080/api/cadastro';

  constructor() { }
}
