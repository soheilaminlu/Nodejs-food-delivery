import { Request , Response  , NextFunction} from "express";
import { editVandorInput, vandorLoginInput} from '../dto'
import { findVandor } from "./AdminController";
import { generateSignature, validatePassword } from "../utility/PasswordUtility";

export const vandorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = <vandorLoginInput>req.body;
    const existingVandor = await findVandor('', email);
    if (existingVandor !== null) {
  
      const validation = await validatePassword(password, existingVandor.password, existingVandor.salt);
      if (validation) {
  
        const signature = generateSignature({
         _id: existingVandor.id , 
         email:existingVandor.email ,
         name:existingVandor.name
        });
       res.json({exisitingVandor:existingVandor , signature:signature});
      }
    }
    return res.json({ message: "Password is Not Valid" });
  };
  


export const getVandorProfile = async (req:Request , res:Response , next:NextFunction) =>{
  const user = req.user 
  if(user) {
   const existingVandor = await findVandor(user._id);
   return  res.json(existingVandor);
  }
  return res.json({message:"User is not Valid"})
}

export const updateVandorProfile = async (req:Request , res:Response , next:NextFunction) =>{
    const {foodType , address , phoneNumber , name} = <editVandorInput>req.body;
    const user = req.user;
    if(user){

      const existingVendor = await findVandor(user._id);

      if(existingVendor !== null){

           existingVendor.name = name;
           existingVendor.address = address;
           existingVendor.phoneNumber = phoneNumber;
           existingVendor.foodType = foodType;
           const saveResult = await existingVendor.save();

           return res.json(saveResult);
      }

   }
   return res.json({message: 'Unable to Update vendor profile '})

}

export const updateVandorService = async (req:Request , res:Response , next:NextFunction) =>{
const user = req.user;
if(user) {
  const existingUser = await findVandor(user._id);
  if(existingUser !== null) {
    existingUser.serviceAvailable = !existingUser.serviceAvailable
    return res.json(existingUser)
  }
  return res.json({message:'Failed to Update Service'})
}

}

export const addFood = async (req:Request , res:Response , next:NextFunction) =>{

}


export const getFood = async (req:Request , res:Response , next:NextFunction) =>{

}
