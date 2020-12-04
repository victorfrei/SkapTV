
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import aws from 'aws-sdk';
aws.config.update({region: 'sa-east-1'});
aws.config.update({accessKeyId:process.env.AKID,secretAccessKey:process.env.SAKEY});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    Id: ObjectId,
    Nick: String,
    Email: String,
    Pass: String,
    date: {type:Date,default:Date.now}
  });



export default async function login({Nick,Email,Pass}){

  

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);
const nick = await user.findOne({Nick}, null);
const email = await user.findOne({Email}, null);

if(nick != null){
  return {err:1,msg:"O nick já foi usado!"};
}else if(email != null){
  return  {err:1,msg:"O email já foi usado!"};
}





const number = Math.floor(Math.random(0.1,1) * 1000000)
const ses = new aws.SES();


var params = {
  Destination: {
   ToAddresses: [
      Email,
   ]
  }, 
  Message: {
   Body: {
     
    html: {
     Charset: "UTF-8", 
     Data: <h3>Confirme sua conta no skap: <a>192.168.0.26:3000/{number}</a></h3>
    }
   }, 
   Subject: {
    Charset: "UTF-8", 
    Data: "Verificação Skap"
   },
  },
  Source:"noreply@skap.tv",
 };

 
 ses.sendEmail(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
  
 });

const HashPass = bcrypt.hashSync(Pass,12)
await user.create({Nick:Nick,Email:Email,Pass:HashPass,Date:Date.now,EmailVerificado:false});
const token = jwt.sign({data:{nick:Nick,profile:"img"} }, process.env.privateKey,{exp:60*60});
return token;

}