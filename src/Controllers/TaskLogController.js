const TaskLogModel = require('../Models/TaskLogModel');
const { ObjectID } = require('mongoose');

module.exports = {
    async GetTaskLogs(request, response) {
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        delete params.TOKEN

        const TaskLogs = await TaskLogModel.find(params).sort({Timestamp:1})

        return response.json(TaskLogs);
    },
    async CreateTask(request, response) {
        const body = request.body

        const TaskLog = await TaskLogModel.create(body);

        return response.json(TaskLog);
    },
    async RemoveTask(request, response) {
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const TaskLog = await TaskLogModel.deleteOne({
            _id: params._id
        });

        return response.json(TaskLog);
    }
}