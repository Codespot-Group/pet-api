/* eslint-disable prettier/prettier */
import { Router } from 'express';
require('dotenv/config');
const asyncHandler = require('express-async-handler');

import UserController from './app/controllers/UserController';
import ImageController from './app/controllers/ImageController';
import StoreController from './app/controllers/StoreController';
import ServiceTypeController from './app/controllers/ServiceTypeController';
import Auth from './app/middlewares/auth';

const routes = new Router();

// Image
routes.get('/image/:image_id', asyncHandler(ImageController.show));

// User
routes.get('/user', Auth.verify, asyncHandler(UserController.find));
routes.get('/user/list', asyncHandler(UserController.index));
routes.post('/user/sign_in', asyncHandler(UserController.signIn));
routes.post('/user/login', asyncHandler(UserController.signIn));
routes.get('/user/user-types', Auth.verify, asyncHandler(UserController.userTypes));
routes.post('/user', asyncHandler(UserController.store));
routes.get('/user/:user_id', asyncHandler(UserController.find));
routes.put('/user/:user_id', asyncHandler(UserController.update));
routes.delete('/user/bulk', Auth.verify, asyncHandler(UserController.bulkDestroy));
routes.delete('/user/:user_id', Auth.verify, asyncHandler(UserController.destroy));


// Store
 routes.get('/store', asyncHandler(StoreController.index));
 routes.post('/store', asyncHandler(StoreController.store));
 routes.get('/store/:store_id', asyncHandler(StoreController.find));
// routes.put('/faq/:faq_id', Auth.verify, asyncHandler(FaqController.update));
// routes.delete('/faq/bulk', Auth.verify, asyncHandler(FaqController.bulkDestroy));

//Service type
routes.get('/service_type',asyncHandler(ServiceTypeController.index))
routes.post('/service_type',asyncHandler(ServiceTypeController.store))

export default routes;
