import express from 'express'
import { Request , Response , NextFunction } from "express";
import { AdminRoute, VandorRoute } from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGO_URL } from './config';
import multer from 'multer'



const app = express();

const imageStorage = multer.diskStorage({
    destination: function (req , file , cb) {
        cb(null , 'images')
    } ,
    filename: function(req , file , cb) {
        cb(null , new Date().toString()+'_'+file.originalname)
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connect to Mongo')
}).catch((error) => {
   console.log('Mongo connection Unsuccessful')
})

app.use('/admin' , AdminRoute);
app.use('/vandor' , VandorRoute);

app.get('/' , (req:Request , res:Response , next:NextFunction) =>{
    res.json({message:"hello"})
})


app.listen(8000 , () => {
    console.log('Server Connected on Port 8000')
})