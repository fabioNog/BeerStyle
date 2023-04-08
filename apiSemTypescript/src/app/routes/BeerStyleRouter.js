const BeerStyleRouter = require('express').Router();
const UsuariosController = require('../controllers/UsuariosController');

//CRUD -> CREATE, READ, UPDATE AND DELETE
BeerStyleRouter.post('/beerstyle', UsuariosController.create);

BeerStyleRouter.get('/beerstyle', UsuariosController.read);

// BeerStyleRouter.patch('/beerstyle/:id', UsuariosController.update);

// BeerStyleRouter.delete('/beerstyle/:id', UsuariosController.delete);

module.exports = BeerStyleRouter;
