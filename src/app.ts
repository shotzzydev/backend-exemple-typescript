import express, { Express } from "express"
import exempleRoute from './routes/exempleRoute'

class App {
    public app: Express
    constructor() {
        this.app = express();
        this.routes();
    }

    private routes() {
        this.app.use('/', exempleRoute)
    }
}

export default new App().app;