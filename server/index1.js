import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors'; 
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js'
import loginRoutes from './routes/login.js';
import employeeRoutes from './routes/employee.js'




const app = express();

const CONNECTION_URL='mongodb://localhost/subscribers';

app.use(express.json({limit:"20mb", extended: true} ));
app.use(express.urlencoded({limit:"20mb", extended: true} ));

app.use(cookieParser());

// app.use(session({
//     secret: 'Very secret',
//     resave: true,
//     store: MongoStore.create({ mongoUrl: CONNECTION_URL })
//   }));

// app.use(auth.initialize);
// app.use(auth.session);
// app.use(auth.setUser);

app.use(cors());
app.options('*', cors() ) ;

app.use('/students', studentRoutes);

app.use('/login', loginRoutes);

app.use('/employee', employeeRoutes);




const PORT = process.env.PORT || 7500;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.listen(PORT, () => console.log('Server Started'))
