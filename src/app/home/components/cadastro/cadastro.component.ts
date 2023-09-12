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
    // Lógica para realizar o cadastro
    if (this.validarCampos()) {
      // Se os campos estiverem válidos, você pode prosseguir com o cadastro

      // Aqui, você pode enviar os dados para o servidor ou realizar qualquer outra ação necessária
      console.log('Realizar Cadastro: Nome:', this.nome, 'E-mail:', this.email, 'CPF/CNPJ:', this.cpfCnpj, 'Senha:', this.senha);

      // Após o cadastro, você pode redirecionar para a página desejada, por exemplo, a página de login
      this.router.navigate(['/Login']);
    } else {
      // Campos inválidos, não prosseguir com o cadastro
      console.error('Campos inválidos. Por favor, verifique seus dados.');
      this.mostrarMensagem = true; // Ativar a mensagem de aviso
    }
  }

  validarCampos(): boolean {
    // Aqui você pode implementar lógica de validação personalizada para os campos
    // Retorna true se os campos estiverem válidos, caso contrário, retorna false

    // Exemplo de validação simples: todos os campos são obrigatórios
    if (!this.nome || !this.email || !this.cpfCnpj || !this.senha || !this.confirmarSenha) {
      return false;
    }

    // Verifique se a senha e a confirmação de senha coincidem
    if (this.senha !== this.confirmarSenha) {
      return false;
    }

    // Outras verificações personalizadas podem ser adicionadas aqui

    return true;
  }

  cancelarCadastro() {
    // Redireciona o usuário para a página de login (ajuste o caminho conforme necessário)
    this.router.navigate(['/Login']);
  }

  ngOnInit() {
    // Inicializações ou lógica de inicialização podem ser adicionadas aqui, se necessário
  }
}
