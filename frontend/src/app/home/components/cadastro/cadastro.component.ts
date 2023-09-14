import { CadastroService } from './../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';
import { take } from 'rxjs/operators';




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
      this.registrationRequest.nome = this.nome;
      this.registrationRequest.sobrenome = this.sobrenome;
      this.registrationRequest.email = this.email;
      this.registrationRequest.senha = this.senha;
      
      console.log('Realizar Cadastro: Nome:', this.nome,'sobrenome', this.sobrenome, 'E-mail:', this.email, 'Senha:', this.senha);
      this.onSubmit();
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
    // Certifique-se de que o objeto registrationRequest está populado corretamente
    if (!this.registrationRequest.nome || !this.registrationRequest.sobrenome || !this.registrationRequest.email || !this.registrationRequest.senha) {
      console.error('Campos inválidos. Por favor, verifique seus dados.');
      this.mostrarMensagem = true;
      return;
    }
  
    // Chame o método do serviço de cadastro e envie o objeto registrationRequest
    this.cadastroService.register(this.registrationRequest).pipe(take(1))
      .subscribe(
        (response: any) => {
          console.log('Cadastro bem-sucedido:', response);
          // Redirecione para a página de login ou faça qualquer outra ação necessária após o cadastro.
          this.router.navigate(['/Login']);
        },
        (error: Error) => {
          console.error('Erro no cadastro:', error);
          // Lide com o erro de cadastro, exiba uma mensagem de erro ou faça qualquer outra ação necessária.
        }
      );
  }

  
}
