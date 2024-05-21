import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { ConfigModule, ConfigService} from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('MONGOURI'),
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[MongooseModule],
})
export class UsersModule {}
