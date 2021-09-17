import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import mongoose from 'mongoose';

const app = express();

app.use(express.json({limit:"20mb", extended: true} ));
app.use(express.urlencoded({limit:"20mb", extended: true} ));

app.use(cors());


const CONNECTION_URL='mongodb://localhost/subscribers';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
