
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
    date: {type:Date,default:Date.now}
  });



export default async function login({Nick,Pass}){
 


 const conn = await mongoose.createConnection(`mongodb+srv://Login:${process.env.L_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);

  const pack =await user.findOne({Nick});
      if(pack==null){
        return {err: true, msg:"O nickname não foi encontrado!"};
      }else{
      if(bcrypt.compareSync(Pass,pack.Pass)){
      let token = jwt.sign({data:{Nick:pack.Nick,profile:"#"} }, process.env.privateKey,{expiresIn:3600});
      return {err:false, token};
      }else{
        return {err: true, msg:"A senha está incorreta!!"};
      }
      }
}