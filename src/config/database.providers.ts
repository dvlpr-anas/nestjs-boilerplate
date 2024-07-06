import { DataSource } from 'typeorm'

console.log(__dirname)

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nest_boilerplate',
                entities: [__dirname + '/../modules/*/entities/*.entity{.ts,.js}'],
                synchronize: true,
            })

            return dataSource.initialize()
        },
    },
]
