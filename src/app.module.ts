import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { DatabaseModule } from './modules/database/database.module'
import configuration from './config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        UserModule,
        AuthModule,
        DatabaseModule,
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
