import express from 'express'
import { Request , Response , NextFunction } from "express";
import { AdminRoute, VandorRoute } from './routes';

const app = express();

app.use('/admin' , AdminRoute);
app.use('/vandor' , VandorRoute)

app.get('/' , (req:Request , res:Response , next:NextFunction) =>{
    res.json({message:"hello"})
})


app.listen(8000 , () => {
    console.log('Server Connected on Port 8000')
})