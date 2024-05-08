import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

export interface Response<T> {
    data: T
    statusCode: number
}

@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, Response<T>>
{
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<Response<T>> {
        return next.handle().pipe(
            map((data) => ({
                statusCode: context.switchToHttp().getResponse().statusCode,
                message: data.message,
                data: data.data,
            })),
        )
    }
}
