import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { UserSchema,User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    NewsModule,
    RegisterModule,
    LoginModule,
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGOURI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature(
      [{name: User.name, schema: UserSchema}],
    ),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService,UsersService],
})
export class AppModule {}
