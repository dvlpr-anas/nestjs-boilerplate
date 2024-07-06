import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class BcryptService {
    encryptPassword = async (password: string) => {
        const saltOrRounds = 10
        return await bcrypt.hash(password, saltOrRounds)
    }

    comparePassword = async (password: string, hash: string) =>
        await bcrypt.compare(password, hash)
}
