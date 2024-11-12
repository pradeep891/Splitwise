import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

// const mongourl = `mongodb+srv://splitwise:splitwise@cluster0.3j0lhjr.mongodb.net/`
const mongourl = `mongodb://localhost:27017/splitwise`;

@Module({
  imports: [MongooseModule.forRoot(mongourl), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
