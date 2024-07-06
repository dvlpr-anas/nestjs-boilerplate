import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [AuthModule, UserModule],
  controllers: [],
  providers: []
})
export class ModulesModule {}
