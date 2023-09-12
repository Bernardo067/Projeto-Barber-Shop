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

    if (this.novaSenha === this.confirmarSenha) {

      this.mostrarMensagem = true;

    } else {

      this.mostrarMensagem = false;
      console.error('As senhas não coincidem. Por favor, verifique suas senhas.');
    }
  }

  cancelarRedefinicao() {
    this.router.navigate(['/Login']);

  }
}

