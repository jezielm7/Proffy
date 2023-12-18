import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
routes
  .route('/classes')
  .get(classesController.index)
  .post(classesController.create);

routes
  .route('/connections')
  .get(connectionsController.index)
  .post(connectionsController.create);


export default routes;
