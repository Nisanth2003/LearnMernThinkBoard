import Note from "../models/note.js";

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find();
        res.status(200).send(notes);
    }
    catch(error){
        console.error("Error in getALLnOTES:",error);
        res.status(500).json({ message: error.message });
    }
}

export async function updateNote(req,res){
    try{
        const notes = await Note.find({});
        res.status(200).send(notes);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}
export async function deleteNote(req,res){
    try{
        const notes = await Note.find({});
        res.status(200).send(notes);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}
export async function createNote(req,res){
    try{
        const notes = await Note.find({});
        res.status(200).send(notes);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}