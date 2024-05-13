import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, NewsModule, RegisterModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
