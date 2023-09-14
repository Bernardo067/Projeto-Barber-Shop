import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  entrar() {

    console.log('Entrar: Usuário:', this.usuario, 'Senha:', this.senha);

    const autenticacaoBemSucedida = true;
    if (autenticacaoBemSucedida) {

      this.router.navigate(['/PaginaProtegida']);
    } else {

      this.router.navigate(['/Cadastro']);
    }
  }

  cadastrar() {

    this.router.navigate(['/Cadastro']);
  }

  redefinirSenha() {

    this.router.navigate(['/redefinirSenha']);
  }
}
