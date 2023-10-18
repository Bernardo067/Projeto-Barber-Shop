export interface User {
  id?: string;
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  tipoUsuario: TipoUsuario;
}

export enum TipoUsuario {
  Client = 0,
  Admin = 1,
  Barber = 2
}