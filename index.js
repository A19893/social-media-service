import express from  'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js'
import User from './models/User.js';
import Post from './models/Post.js';
import { users, posts } from './data/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'}));
app.use(morgan("common"));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

app.use(routes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 8081;
mongoose.connect(process.env.MONGO_URL).then(()=> console.log(`Connection to database is successful`)).catch((error)=> console.log(`${error.message} did not connect to database`))

app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`)
    // Add this data one time
    // User.insertMany(users);
    // Post.insertMany(posts);
})