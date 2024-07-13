import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type BaseModelDocument = HydratedDocument<BaseModel>;

@Schema()
export class BaseModel {
  // Shared properties for all models
  @Prop({ required: true, unique: true, default: randomUUID })
  _id: string;

  @Prop({ required: true, default: Date.now })
  createdAt: number;

  @Prop({ required: true, default: Date.now })
  updatedAt: number;

  @Prop({ required: true, default: 'system' })
  createdBy: string;

  @Prop({ required: true, default: 'system' })
  updatedBy: string;
}

export const BaseSchema = SchemaFactory.createForClass(BaseModel);
