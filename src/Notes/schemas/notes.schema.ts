import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Notes extends Document
{
  @Prop(['string'])
  name: string;

  @Prop(['string'])
  notes:string;
}

export const NotesSchema = SchemaFactory.createForClass(Notes)