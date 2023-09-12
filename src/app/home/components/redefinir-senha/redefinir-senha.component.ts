import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {
  novaSenha: string = '';
  confirmarSenha: string = '';
  mostrarMensagem: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializações podem ser adicionadas aqui, se necessário
  }

  confirmarRedefinicao() {
    // Lógica para confirmar a redefinição de senha
    if (this.novaSenha === this.confirmarSenha) {
      // Senha redefinida com sucesso
      this.mostrarMensagem = true;
      // Outras ações, como enviar a nova senha para o servidor, podem ser adicionadas aqui
    } else {
      // Senhas não coincidem, exibir mensagem de erro
      this.mostrarMensagem = false;
      console.error('As senhas não coincidem. Por favor, verifique suas senhas.');
    }
  }

  cancelarRedefinicao() {
    this.router.navigate(['/Login']);
    // Lógica para cancelar a redefinição de senha
    // Isso pode incluir ações como redirecionar o usuário para a página de login, por exemplo
  }
}

