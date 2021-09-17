import express from 'express';
import mongoose from 'mongoose';

const app = express()
mongoose.connect("mongodb://localhost/subscribers", {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

const activityRouter = require('./routes/activity')
app.use('/activity', activityRouter)

app.listen(5000, () => console.log('Server Started'))