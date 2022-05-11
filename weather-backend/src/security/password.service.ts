import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SecurityConfig } from "../configs/config.interface";
import {compare, hash} from 'bcrypt'
@Injectable()
export class PasswordService {
    get bcryptSaltRounds(): string | number {
        const secutrityConfig = this.configService.get<SecurityConfig>('security')
        const saltOrRounds = secutrityConfig.bcryptSaltOrRound;

        return Number.isInteger(Number(saltOrRounds))
        ? Number(saltOrRounds)
        : saltOrRounds
    }

    constructor(private configService:ConfigService){}

    validatePassword(password:string,hashedPassword:string):Promise<boolean> {
        return compare(password, hashedPassword)
    }
    hashPassword(password:string):Promise<string> {
        return hash(password,this.bcryptSaltRounds)
    }
}