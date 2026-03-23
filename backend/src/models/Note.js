import mongoose from "mongoose";

//1 - create a schema 
//2-create a model based of that schema

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },

},{timestamps:true}//mongodb will give you by default createdAt and updatedAt fields with this option.

);

const Note = mongoose.model("Note",NoteSchema);

export default Note;

//what this is doing is creating a model based on noteschema model and we will use this interact with other nodes
