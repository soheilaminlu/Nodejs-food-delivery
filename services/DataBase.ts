import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

export default async () => {
    try {
        mongoose.connect(MONGO_URL).then(() => {
            console.log('Connect to Mongo')
        }).catch((error) => {
           console.log('Mongo connection Unsuccessful')
        })
    } catch (error) {
        console.log(error)
    }    
}
