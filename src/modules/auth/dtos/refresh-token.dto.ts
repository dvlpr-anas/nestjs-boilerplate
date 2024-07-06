import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class RefreshTokenDto {
    @ApiProperty({
        type: String,
        description: 'Refresh Token',
    })
    @IsNotEmpty()
    refreshToken: string
}
