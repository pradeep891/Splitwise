import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.model';

@Module({
  imports: [
    MongooseModule.forFeature([ {name: User.name, schema: UserSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
//   controllers: [CatsController],
//   providers: [CatsService],