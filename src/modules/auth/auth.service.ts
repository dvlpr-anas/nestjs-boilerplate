import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { SignupDto } from './dtos/Signup.dto'

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    signup(user: SignupDto): Promise<User> {
        return this.userRepository.save(user)
    }

    getIdByUsername(userName: string): Promise<User | null> {
        const options = {
            select: { id: true },
            where: { userName },
        }
        return this.userRepository.findOne(options)
    }

    getUser(userName: string): Promise<User | null> {
        const options = {
            select: {
                id: true,
                firstName: true,
                lastName: true,
                age: true,
                userName: true,
                password: true,
            },
            where: { userName },
        }
        return this.userRepository.findOne(options)
    }
}
