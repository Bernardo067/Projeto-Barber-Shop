import { CadastroService } from './../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  mostrarMensagem: boolean = false;
  registrationRequest: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  };

  constructor(private router: Router, private cadastroService: CadastroService) {}

  nome: string = '';
  email: string = '';
  sobrenome: string = '';
  senha: string = '';
  confirmarSenha: string = '';


  realizarCadastro() {

    if (this.validarCampos()) {
      console.log('Realizar Cadastro: Nome:', this.nome,'sobrenome', this.sobrenome, 'E-mail:', this.email, 'Senha:', this.senha);


      this.router.navigate(['/Login']);
    } else {

      console.error('Campos inválidos. Por favor, verifique seus dados.');
      this.mostrarMensagem = true;
    }
  }

  validarCampos(): boolean {
    if (!this.nome || !this.email || !this.sobrenome || !this.senha || !this.confirmarSenha) {
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

  onSubmit() {
    this.cadastroService.register(this.registrationRequest)
  }
}
