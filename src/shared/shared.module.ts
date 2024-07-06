import { Module } from '@nestjs/common'
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: []
})
export class SharedModule { }
