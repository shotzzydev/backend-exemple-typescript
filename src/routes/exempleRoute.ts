import { Router } from "express";
import exempleController from "../controllers/exempleController";

const route = Router()

route.get('/', exempleController.index);
route.post('/post', exempleController.post);

export default route;