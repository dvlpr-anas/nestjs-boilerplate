import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import helmet from 'helmet'
import { SwaggerModule } from '@nestjs/swagger'
import { swaggerConfig } from './config/swagger'

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule, { cors: true })

    app.use(helmet())

    app.setGlobalPrefix('api/v1')

    app.useGlobalPipes(new ValidationPipe())

    app.useGlobalInterceptors(new TransformInterceptor())

    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('swagger', app, document)

    await app.listen(process.env.PORT || 3000)
}

bootstrap()
