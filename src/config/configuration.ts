export default () => ({
    jwtSecret: process.env.JWT_SECRET || '',
    global: {
        port: parseInt(process.env.PORT),
    },
    database: {
        dbType: process.env.DB_TYPE,
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
        dbUsername: process.env.DB_USERNAME,
        dbPassword: process.env.DB_PASSWORD,
        dbDatabse: process.env.DB_DATABASE,
        dbSync: process.env.DB_SYNCHRONIZE
    }
});