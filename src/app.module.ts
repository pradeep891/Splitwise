import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongourl = `mongodb+srv://splitwise:splitwise@cluster0.3j0lhjr.mongodb.net/splitwise`
@Module({
  imports: [
    MongooseModule.forRoot(mongourl),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
