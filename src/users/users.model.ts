import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel, BaseSchema } from 'src/base/base.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true , unique: true})
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  age: number;

  @Prop()
  phoneNo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);