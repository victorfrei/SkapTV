
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userSchema = new Schema({
    Id: ObjectId,
    Nick: String,
    Email: String,
    Pass: String,
    date: {type:Date,default:Date.now}
  });



export default async function login({Nick,Password}){
 


 const conn = await mongoose.createConnection(`mongodb+srv://Login:${process.env.L_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);

  const pack =await user.findOne({Nick});
console.log(pack);
      if(pack==null){
        return "Login Denied!";
      }else{
      const {_id,Nickname} = pack;
      console.log(_id);
      const token = jwt.sign({exp:60*60,data:{id:_id,Nickname:Nickname,profile:"img"} }, process.env.privateKey);
      return token;
      }
}