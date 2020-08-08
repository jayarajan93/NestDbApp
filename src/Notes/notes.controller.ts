import { Controller, Get,Param, Post,Body,Delete, Put } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Notes } from './schemas/notes.schema';
import { notesDto } from './Dtos/notes.dto';
@Controller('notes')
export class NotesController 
{
    constructor(private readonly notesService: NotesService){}

    //get all notes

    @Get()
    findAll():Promise<Notes[]>
    {
        return this.notesService.viewnotes();
    }
    // get one note

    @Get(":id")
    findOne(@Param('id')id):Promise <Notes>
    {
        return this.notesService.viewnote(id);
    }
    //Add a note

    @Post('add')
    create(@Body() newNote:notesDto):Promise<Notes>
    {
        return this.notesService.create(newNote);
    }
    // Delete a note

    @Delete(':id')
    delete(@Param('id')id):Promise<string>
    {
        return this.notesService.delete(id);
    }
    //Update a note
    
    @Put(':id')
    update(@Body() newNote:notesDto, @Param('id')id):Promise<Notes>
    {
        return this.notesService.update(id,newNote);
    }


}