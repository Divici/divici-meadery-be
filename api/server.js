const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//routers
//const authRouter = require('./auth/auth-router.js');
const meadsRouter = require('./meads/meads-router');
//const userRouter = require('./users/user-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//routers
//server.use('/api/auth', authRouter);
server.use('/api/meads', meadsRouter);
//server.use('/api/users', userRouter)

server.use('/api/', (_,res)=>{
res.json({data:"Welcome to the API"})
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
    });
});

module.exports = server;    