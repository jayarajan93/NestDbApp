import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {NotesController} from './notes.controller';
import {NotesService} from './notes.service';
import {Notes,NotesSchema} from './schemas/notes.schema';
@Module
({
    imports:[MongooseModule.forFeature([{name:Notes.name,schema:NotesSchema}])],
    controllers:[NotesController],
    providers:[NotesService],
})

export class NotesModule{}