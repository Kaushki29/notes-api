//const express=require('express');
import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
//import {connection} from './src/shared/db/connection.js'
import noteRoutes from './src/modules/notes/routes/note-routes.js';
import user_route from './src/modules/user/routes/userRoute.js';
import { createConnection } from './src/shared/db/connection.js';

const app=express();   //call the express function and get the app function
dotenv.config();   //read .env file and load env variables in process.env
//app.use(connection);   //attach middleware
app.use(cors());
app.use(express.json());
//attach middleware to the route
app.use('/',noteRoutes);
//app.get('/',(req,res)=>res.send('Hi Client'));
app.use('/',user_route);
const server=app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log(chalk.red.bold('Server Crash '),err);
    }
    else{
        console.log(chalk.green.bold('Server Up and running'),server.address().port);
        createConnection();
    }
})