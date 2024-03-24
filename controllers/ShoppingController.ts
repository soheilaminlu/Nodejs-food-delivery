import {Request , Response , NextFunction} from 'express';
import { Vandor } from '../models';




export const foodAvailable = async (req:Request , res:Response , next:NextFunction) => {
    const {pincode} = req.params;
    const result = await Vandor.find({pinCode:pincode , serviceAvailable:true})
    .sort([['rating' , 'descending']])
    .populate('food')
    if(result.length > 0) {
        return res.status(200).json(result);
    }
    return res.status(400).json({message:"Not found Data"})
}

export const getTopRestaurant = async (req:Request , res:Response , next:NextFunction) => {
    const {pincode} = req.params;
    const result = await Vandor.find({pinCode:pincode , serviceAvailable:true})
    .sort([['rating' , 'descending']])
    .limit(10)
    if(result.length > 0) {
        return res.status(200).json(result);
    }
    return res.status(400).json({message:"Not found Data"})
}


export const food30Min = async (req:Request , res:Response , next:NextFunction) => {
  
}



export const searchFood = async (req:Request , res:Response , next:NextFunction) => {
    
}

export const findRestaurantById = async (req:Request , res:Response , next:NextFunction) => {
    
}
