import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginDto {
    @ApiProperty({
        type: String,
        description: 'Username',
        default: 'anas',
    })
    @IsNotEmpty()
    userName

    @ApiProperty({
        type: String,
        description: 'Password',
        default: '1234',
    })
    @IsNotEmpty()
    password
}
