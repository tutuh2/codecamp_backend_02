import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({}), //
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        AuthResolver, //
        AuthService,
        UserService,
    ],
})
export class AuthModule {}
