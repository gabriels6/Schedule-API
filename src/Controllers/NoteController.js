const NoteModel = require('../Models/NoteModel');
const {ObjectID} = require('mongodb');

module.exports = {
    async GetNotes(request,response){
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const Notes = await NoteModel.find({Author_Id:params.id}).sort({Date:1});

        return response.json(Notes);
    },

    async AddNote(request,response){
        const {Author_Id,Title,Content,Date,Urgency, StartTaskTime, EndTaskTime} = request.body;

        const Note = await NoteModel.create({
            Author_Id,
            Title,
            Content,
            Date,
            Urgency,
            StartTaskTime: (StartTaskTime || ''),
            EndTaskTime: (EndTaskTime || '')
        });

        return response.json(Note);
    },

    async UpdateNote(request, response) {
        const {_id} = request.body;

        let data = Object.fromEntries(Object.entries(request.body).map((value) => value[1] != null ? [value[0], value[1]] : []));

        const Note = await NoteModel.updateOne(
            { _id: ObjectID(_id) },
            data);

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