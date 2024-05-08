import { IsNotEmpty, IsOptional, Length, Min } from 'class-validator'

export class SignupDto {
    @IsNotEmpty()
    @Length(3, 255)
    firstName

    @IsOptional()
    @Length(3, 255)
    lastName

    @IsOptional()
    @Min(0)
    age

    @IsNotEmpty()
    @Length(4, 20)
    userName

    @Length(4, 255)
    @IsNotEmpty()
    password
}
