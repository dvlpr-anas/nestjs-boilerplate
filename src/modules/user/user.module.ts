import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { userProviders } from './user.providers'
import { DatabaseModule } from '../../shared/modules/database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...userProviders, UserService],
})
export class UserModule {}
