import { Controller, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('User')
@Controller('user')
export class UserController {
    @Put()
    updateUser() {
        return 'update user works'
    }
}
