import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtServicee {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async getAccessToken(data) {
        return await this.jwtService.signAsync(
            { data },
            { secret: this.configService.get<string>('JWT_SECRET') }
        )
    }
}
