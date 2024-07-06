import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        ModulesModule,
        CoreModule,
        SharedModule
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
