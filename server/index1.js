import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoDBSession from 'connect-mongodb-session';
import MongoStore from 'connect-mongo';
import cors from 'cors'; 
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js'
import loginRoutes from './routes/login.js';
import employeeRoutes from './routes/employee.js'



const app = express();

const MongoSession = MongoDBSession(session)



const CONNECTION_URL='mongodb://localhost/subscribers';

const PORT = process.env.PORT || 7500;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.listen(PORT, () => console.log('Server Started'))

const store = new MongoSession({
    uri: CONNECTION_URL, 
    collection : 'sessions',
})
app.use(express.json({limit:"20mb", extended: true} ));
app.use(express.urlencoded({limit:"20mb", extended: true} ));

app.use(cookieParser());

app.use(session({
    name: 'my-app',
    secret: 'Very secret',
    resave: false,
    saveUninitialized: false, 
    store: store,
    cookie: {
    secure: false,
    maxAge: 400000,
    httpOnly: true,
    sameSite: false,
    },
  }));

  
// app.use(auth.initialize);
// app.use(auth.session);
// app.use(auth.setUser);

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  }));



app.options('*', cors() ) ;

app.use('/students', studentRoutes);

app.use('/login', loginRoutes);

app.use('/employee', employeeRoutes);




