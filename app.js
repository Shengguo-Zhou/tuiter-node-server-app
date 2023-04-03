import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const DB_CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.dsu2jvc.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_STRING =   DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
TuitsController(app);
UserController(app);
app.listen(process.env.PORT || 4000);