import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notes } from './schemas/notes.schema';
import { notesDto } from './Dtos/notes.dto';

@Injectable()
export class NotesService{
    constructor(@InjectModel('Notes') private NotesModel:Model<Notes>){}
    //View notes

    async viewnotes():Promise<Notes[]>
     {
         return await this.NotesModel.find({});   
     }
     //View a note

    async viewnote(id:string):Promise<Notes>
    {
        const test=await this.NotesModel.findOne({"name":id},function(err,obj){});
        return test
    }
    //Create a note

    async create(newNote:notesDto):Promise<Notes>
    {
        const newnote=new this.NotesModel(newNote);
        const newproduct=await newnote.save();
        return newproduct

    }
    //Delete a note

    async delete(id:string):Promise<string>
    {
    this.NotesModel.find({name:id})
        const test=await this.NotesModel.deleteOne({name:id},function(err){})
        return `${id}`
    }
    //Update a note
    
    async update(id:string,newNote:notesDto):Promise<Notes>
    {
        const updatedRecord=await this.NotesModel.findOneAndUpdate({name:id},{$set:{notes:newNote.notes}})
        return updatedRecord
    }
            

}