import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsuarioLogin } from '../entities/usuario-login.entity';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() usuarioLogin: UsuarioLogin) {
    return this.authService.login(usuarioLogin);
  }
}
