import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request
} from '@nestjs/common'
import { SignupDto } from './dtos/Signup.dto'
import { LoginDto } from './dtos/login.dto'
import { RefreshTokenDto } from './dtos/refresh-token.dto'
import { AuthService } from './auth.service'
import { Public } from 'src/core/decorators/public.decorator'
import { BcryptService } from './helpers/bcrypt.service'
import { JwtServicee } from './helpers/jwt.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private bcryptService: BcryptService,
    private jwtService: JwtServicee
  ) {}

  @Public()
  @Post('signup')
  async signup(@Body() user: SignupDto) {
    const alreadyUser = await this.authService.getIdByUsername(user.userName)
    if (alreadyUser) throw new HttpException('Username alreay exist', HttpStatus.BAD_REQUEST)

    user.password = await this.bcryptService.encryptPassword(user.password)

    const response = await this.authService.signup(user)

    response.password = undefined

    return { data: response, message: 'User Created' }
  }

  @Public()
  @Post('login')
  @HttpCode(200)
  async login(@Body() user: LoginDto) {
    const alreadyUser = await this.authService.getUser(user.userName)
    if (!alreadyUser)
      throw new HttpException('Username or password is wrong', HttpStatus.BAD_REQUEST)

    const isMatch = await this.bcryptService.comparePassword(user.password, alreadyUser.password)
    if (!isMatch) throw new HttpException('Username or password is wrong', HttpStatus.BAD_REQUEST)

    alreadyUser.password = undefined

    const accessToken = await this.jwtService.getAccessToken(alreadyUser)

    return {
      data: { user: alreadyUser, accessToken },
      message: 'Login Successful'
    }
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user
  }

  @Post('get-refresh-token')
  @HttpCode(200)
  getRefreshToken(@Body() refreshToken: RefreshTokenDto) {
    console.log(refreshToken)
    return 'get refresh token works'
  }
}
