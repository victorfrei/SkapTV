
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


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

export default async function changeimg(req,resp){
  if(req.method == "POST"){
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify:false});
    const user = conn.model("User",userSchema);
    const {Profile} = req.body;
    const userupdate = await user.findOneAndUpdate(jwt.decode(req.body.token).Nick,{Profile:Profile});
    const {Nick} = userupdate;
    resp.send(jwt.sign({data:{Nick,Profile}},process.env.privateKey,{expiresIn:18000}));
    resp.status = 200;
  
}
    
}