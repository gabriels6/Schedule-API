const NoteModel = require('../Models/NoteModel');
const {ObjectID} = require('mongodb');

module.exports = {
    async GetNotes(request,response){
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const Notes = await NoteModel.find({Author_Id:params.id});

        return response.json(Notes);
    },

    async AddNote(request,response){
        const {Author_Id,Title,Content,Date,Urgency} = request.body;

        const Note = await NoteModel.create({
            Author_Id,
            Title,
            Content,
            Date,
            Urgency
        });

        return response.json(Note);
    },

    async RemoveNote(request,response){
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const Note = await NoteModel.deleteOne(
            {
                _id:ObjectID(params._id)
            });

        return response.json(Note);

    }
}