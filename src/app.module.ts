import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NotesModule} from './Notes/notes.module'

@Module
({
  imports: [MongooseModule.forRoot('mongodb://localhost/notesdatabase'), NotesModule],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
