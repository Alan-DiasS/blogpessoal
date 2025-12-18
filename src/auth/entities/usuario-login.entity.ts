import { IsNotEmpty } from 'class-validator';

export class UsuarioLogin {
  @IsNotEmpty()
  usuario: string;

  @IsNotEmpty()
  senha: string;
}
