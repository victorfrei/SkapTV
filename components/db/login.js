
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userSchema = new Schema({
    Id: ObjectId,
    Nick: String,
    Email: String,
    Pass: String,
    Profile: String,
    date: {type:Date,default:Date.now}
  });



export default async function login({Email,Pass}){
 


 const conn = await mongoose.createConnection(`mongodb+srv://Login:${process.env.L_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);

  const pack =await user.findOne({Email});
      if(pack==null){
        return {err: true, msg:"O Email não foi encontrado!"};
      }else{
      const {Nick,Profile} = pack;
      if(bcrypt.compareSync(Pass,pack.Pass)){
      let token = jwt.sign({data:{Nick:Nick,Profile:Profile} }, process.env.privateKey,{expiresIn:3600});
      return {err:false, token};
      }else{
        return {err: true, msg:"A senha está incorreta!!"};
      }
      }
}