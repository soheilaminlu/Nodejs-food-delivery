import mongoose , {Schema  , Document , model} from "mongoose";

interface vandorDoc extends Document {
    ownerName: string;
    foodType: string;
    pinCode:  string ;
    address: string;
    password: string;
    phoneNumber: string;
    email: string;
    salt:string;
    serviceAvailable: Boolean;
    coverImage:[string];
    rating:Number;
    // food: any
}


const vandorSchema = new Schema({
    ownerName: {type:String , required:true} , 
    foodType: {type:String , required:true} , 
    pinCode: {type:String , required:true} , 
    address: {type:String , required:true} , 
    password: {type:String , required:true},
    phoneNumber: {type:Number} , 
    email: {type:String} , 
    salt:{type:String , required:true}, 
    serviceAvailable: {type:Boolean , required:true} , 
    coverImage:{type:[String]} , 
    rating:{type:Number} , 
//     food:[{type:mongoose.Schema.Types.ObjectId , 
//         ref: 'food'
// }] 
} , {
  toJSON:{
    transform(doc , ret) {
      delete ret.password 
      delete ret.salt
      delete ret.createdAt 
      delete ret.__v
      delete ret.updatedAt
    }
  } , 
  timestamps:true  
})

const Vandor = mongoose.model<vandorDoc>('vandor' , vandorSchema);

export {Vandor}
