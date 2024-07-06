import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { DatabaseModule } from '../../shared/modules/database/database.module'
import { userProviders } from '../user/user.providers'
import { AuthGuard } from '../../core/guards/auth.guard'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { BcryptService } from './helpers/bcrypt.service';
import { JwtServicee } from './helpers/jwt.service';

@Module({
    imports: [
        DatabaseModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get<string>('JWT_SECRET'),
                    signOptions: { expiresIn: 3600 },
                    global: true
                }
            },
            inject: [ConfigService]
        }),
    ],
    providers: [
        ...userProviders,
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
        BcryptService,
        JwtServicee
    ],
    controllers: [AuthController],
})
export class AuthModule { }
