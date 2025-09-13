import { Router } from "express";
import exempleController from "../controllers/exempleController";
import exempleMiddlewares from "../middlewares/exempleMiddlewares";

const route = Router()

route.get('/', exempleController.index);
route.post('/post', exempleMiddlewares, exempleController.post);

export default route;