import { DocumentBuilder } from '@nestjs/swagger'

export const swaggerConfig = new DocumentBuilder()
    .setTitle('User')
    .setDescription('The NestJS Boilerplate API description')
    .setVersion('1.0')
    .addTag('user')
    .build()
