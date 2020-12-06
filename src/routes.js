const { Router } = require('express');
const NoteController = require('./Controllers/NoteController');
const UserController = require('./Controllers/UserController');

const routes = Router();



routes.get('/Users',UserController.GetUsers);
routes.post('/User',UserController.GetUserByName);
routes.post('/User/Create',UserController.AddUser);

routes.get('/Notes',NoteController.GetNotes);
routes.post('/Notes',NoteController.AddNote);
routes.delete('/Note',NoteController.RemoveNote);

module.exports = routes;