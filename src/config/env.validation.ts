import { plainToInstance } from 'class-transformer'
import { IsBoolean, IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator'

class EnvironmentVariables {
    @IsNotEmpty()
    @IsNumber()
    APP_PORT: number

    @IsNotEmpty()
    @IsString()
    JWT_SECRET: string

    @IsNotEmpty()
    @IsString()
    DB_TYPE: string

    @IsNotEmpty()
    @IsString()
    DB_HOST: string

    @IsNotEmpty()
    @IsNumber()
    DB_PORT: number

    @IsNotEmpty()
    @IsString()
    DB_USERNAME: string

    @IsString()
    DB_PASSWORD: string

    @IsNotEmpty()
    @IsString()
    DB_DATABASE: string

    @IsNotEmpty()
    @IsBoolean()
    DB_SYNCHRONIZE: boolean
}

export const validate = (config: Record<string, unknown>) => {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true })

    const errors = validateSync(validatedConfig, { skipMissingProperties: false })

    if (errors.length > 0) throw new Error(errors.toString())

    return validatedConfig
}