import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {

  constructor(
    private readonly service: AuthService
  ) {}

  @Post('login')
  async login(@Body() user: LoginDto) {

    return this.service.login(user)
  }
}