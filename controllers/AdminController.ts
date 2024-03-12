import { Request , Response , NextFunction } from "express";

export const createVandor = async (req: Request , res:Response , next:NextFunction) => {
    
}

export const getVandors = async (req: Request , res:Response , next:NextFunction) => {
    res.json({message:"hi from van"})
}


export const getVandorById = async (req: Request , res:Response , next:NextFunction) => {
    
}