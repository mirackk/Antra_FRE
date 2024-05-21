import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'mirack',
        }),
        PassportModule,
        UsersModule,
    ],
    providers: [AuthService,UsersService],
})
export class AuthModule {}
