import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatePasswordRequest } from '../../model/updatePasswordRequest';
import { UpdatePasswordService } from '../../service/update-password.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {
  email: string = ''; // Adicione a propriedade 'email' aqui
  newPassword: string = '';
  confirmarSenha: string = '';
  mostrarMensagem: boolean = false;
  updatePasswordRequest: UpdatePasswordRequest = {
    email: '',
    newPassword: ''
  }

  constructor(private router: Router, private uptadeService: UpdatePasswordService) {}

  ngOnInit(): void {
    // Inicializações podem ser adicionadas aqui, se necessário
  }

  confirmarRedefinicao() {
    // Lógica para confirmar a redefinição de senha
    if (this.newPassword === this.confirmarSenha) {
      this.updatePasswordRequest.email = this.email;
      this.updatePasswordRequest.newPassword = this.newPassword;

      this.uptadeService.redefinirSenha(this.updatePasswordRequest).subscribe(
        response => {
          console.log('Senha atualizada com sucesso!', response);
        },
        error => {
          console.error('Erro ao atualizar a senha:', error);
        }
      );;

      this.router.navigate(['/Login']);
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