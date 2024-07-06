import { ConfigService } from '@nestjs/config'
import { DataSource } from 'typeorm'

export const databaseProviders = [
    {
        inject: [ConfigService],
        provide: 'DATA_SOURCE',
        useFactory: async (configService: ConfigService) => {
            type dbtype = 'mysql' | 'mariadb'
            const dataSource = new DataSource({
                type: configService.get<dbtype>('DB_TYPE'),
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                entities: [
                    __dirname + '/../modules/*/entities/*.entity{.ts,.js}',
                ],
                synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
            })

            return dataSource.initialize()
        },
    },
]
