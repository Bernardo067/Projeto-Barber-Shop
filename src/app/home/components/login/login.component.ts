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
    // Inicializações podem ser adicionadas aqui, se necessário
  }

  entrar() {
    // Lógica para autenticar o usuário
    console.log('Entrar: Usuário:', this.usuario, 'Senha:', this.senha);

    // Simule uma autenticação bem-sucedida aqui ou use sua própria lógica de autenticação.
    const autenticacaoBemSucedida = true; // Suponha que a autenticação foi bem-sucedida

    if (autenticacaoBemSucedida) {
      // Se a autenticação for bem-sucedida, redirecione para a página protegida.
      this.router.navigate(['/PaginaProtegida']);
    } else {
      // Caso contrário, redirecione para a página de cadastro.
      this.router.navigate(['/Cadastro']);
    }
  }

  cadastrar() {
    // Lógica para redirecionar para a página de cadastro
    this.router.navigate(['/Cadastro']);
  }

  redefinirSenha() {
    // Lógica para redirecionar para a página de redefinição de senha
    this.router.navigate(['/redefinirSenha']);
  }
}
