import { IsNotEmpty } from 'class-validator'

export class LoginDto {
    @IsNotEmpty()
    userName

    @IsNotEmpty()
    password
}
