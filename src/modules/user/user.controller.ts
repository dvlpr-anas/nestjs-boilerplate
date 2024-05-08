import { Controller, Get, Put } from '@nestjs/common'

@Controller('user')
export class UserController {
    @Put()
    updateUser() {
        return 'update user works'
    }
}
