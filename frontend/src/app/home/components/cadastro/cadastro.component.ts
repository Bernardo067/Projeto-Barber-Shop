
import { CadastroService } from './../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { take } from 'rxjs/operators';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})



export class CadastroComponent implements OnInit {
  mostrarMensagem: boolean = false;
  tipoCadastro: string = 'cliente';
  user: User = {
    nome: '',
    sobrenome: '',
    email: '',
    password: '',
    tipoUsuario: 0
  };

  constructor(private router: Router, private cadastroService: CadastroService) {}

  nome: string = '';
  email: string = '';
  sobrenome: string = '';
  password: string = '';
  confirmarSenha: string = '';

  isPasswordValid(): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(this.password);
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  realizarCadastro() {

    if (this.validarCampos()) {
      this.user.nome = this.nome;
      this.user.sobrenome = this.sobrenome;
      this.user.email = this.email;
      this.user.password = this.password;

      this.cadastrarUsuario();

      console.log(this.user);
      
      
      
      this.router.navigate(['/Login']);
    } else {

      console.error('Campos inválidos. Por favor, verifique seus dados.');
      this.mostrarMensagem = true;
    }
  }

  validarCampos(): boolean {
    if (!this.nome || !this.email || !this.sobrenome || !this.password || !this.confirmarSenha) {
      return false;
    }
    if (this.password !== this.confirmarSenha) {
      return false;
    }
    return true;
  }

  cancelarCadastro() {

    this.router.navigate(['/Login']);
  }

  ngOnInit() {

  }
  cadastrarUsuario() {
    this.cadastroService.criarUsuario(this.user).subscribe(
      response => {
        console.log('Usuário criado com sucesso!', response);
      },
      error => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }

  
  

  
}