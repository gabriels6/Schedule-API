const { Router } = require('express');
const NoteController = require('./Controllers/NoteController');
const UserController = require('./Controllers/UserController');
const DailyReviewController = require('./Controllers/DailyReviewController');
const TaskLogController = require('./Controllers/TaskLogController');

const routes = Router();



routes.get('/Users',UserController.GetUsers);
routes.post('/User',UserController.GetUserByName);
routes.post('/User/Create',UserController.AddUser);

routes.get('/Notes',NoteController.GetNotes);
routes.post('/Notes',NoteController.AddNote);
routes.delete('/Note',NoteController.RemoveNote);

routes.get('/DR',DailyReviewController.GetReview);
routes.post('/DR',DailyReviewController.AddReview);
routes.delete('/DR',DailyReviewController.RemoveReview);

routes.get('/TaskLogs',TaskLogController.GetTaskLogs);
routes.post('/TaskLogs',TaskLogController.CreateTask);
routes.delete('/TaskLogs', TaskLogController.RemoveTask);

module.exports = routes;