import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  mostrarMensagem: boolean = false; // Adicione esta propriedade

  constructor(private router: Router) {}

  nome: string = '';
  email: string = '';
  cpfCnpj: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  realizarCadastro() {

    if (this.validarCampos()) {
      console.log('Realizar Cadastro: Nome:', this.nome, 'E-mail:', this.email, 'CPF/CNPJ:', this.cpfCnpj, 'Senha:', this.senha);


      this.router.navigate(['/Login']);
    } else {

      console.error('Campos inválidos. Por favor, verifique seus dados.');
      this.mostrarMensagem = true;
    }
  }

  validarCampos(): boolean {
    if (!this.nome || !this.email || !this.cpfCnpj || !this.senha || !this.confirmarSenha) {
      return false;
    }
    if (this.senha !== this.confirmarSenha) {
      return false;
    }
    return true;
  }

  cancelarCadastro() {

    this.router.navigate(['/Login']);
  }

  ngOnInit() {

  }
}
