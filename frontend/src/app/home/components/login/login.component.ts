import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/loginRequest';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  entrar() {
    const loginRequest: LoginRequest = {
      email: this.usuario,
      password: this.senha
    };

    this.loginService.login(loginRequest).subscribe(
      response => {
        console.log('Login bem-sucedido!', response);
        // Redirecione para a página protegida após o login bem-sucedido
        this.router.navigate(['/PgUsuario']);
      },
      error => {
        console.error('Erro ao fazer login:', error);
        // Redirecione para a página de cadastro em caso de erro
        this.router.navigate(['/Cadastro']);
      }
    );
  }

  cadastrar() {
    this.router.navigate(['/Cadastro']);
  }

  redefinirSenha() {
    this.router.navigate(['/redefinirSenha']);
  }
}
