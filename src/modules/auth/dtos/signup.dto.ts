import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, Length, Min } from 'class-validator'

export class SignupDto {
    @ApiProperty({
        type: String,
        description: 'First Name',
        default: 'Anas',
    })
    @IsNotEmpty()
    @Length(3, 255)
    firstName: string

    @ApiProperty({
        type: String,
        description: 'Last Name',
        default: 'Shaikh',
        required: false,
    })
    @IsOptional()
    @Length(3, 255)
    lastName: string

    @ApiProperty({
        type: Number,
        description: 'Age',
        default: 27,
        required: false,
    })
    @IsOptional()
    @Min(0)
    age: number

    @ApiProperty({
        type: String,
        description: 'Username',
        default: 'anas',
    })
    @IsNotEmpty()
    @Length(4, 20)
    userName: string

    @ApiProperty({
        type: String,
        description: 'Password',
        default: '1234',
    })
    @Length(4, 255)
    @IsNotEmpty()
    password: string
}
