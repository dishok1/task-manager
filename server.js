import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import connectDB from './config/db.js';
connectDB();
import bodyParser from 'body-parser';
import express from 'express';

//Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use(express.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
