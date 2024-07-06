import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { validate } from './config/env.validation';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, validate }),
        ModulesModule,
        CoreModule,
        SharedModule
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
