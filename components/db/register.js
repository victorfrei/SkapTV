
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
import nodemailer from 'nodemailer'

const userSchema = new Schema({
    Id: ObjectId,
    Nick: String,
    Email: String,
    Pass: String,
    date: {type:Date,default:Date.now},
    EmailVerificado: Boolean,
    Number: Number
  });

  const channelSchema = new Schema({
    Id: ObjectId,
    Subs: Number,
    Follows: Number,
    Owner: String,
    Banner: String,
    Avatar: String,
    CreatedDate: {type:Date,default:Date.now},
    Layout: {type:Number,default:1},
    Verificado: Boolean,
    Color: String
  });



export default async function login({Nick,Email,Pass}){

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);
const channel = conn.model("Channels",channelSchema);
const nick = await user.findOne({Nick}, null);
const email = await user.findOne({Email}, null);

if(nick != null){
  return {err:1,msg:"O nick já foi usado!"};
}else if(email != null){
  return  {err:1,msg:"O email já foi usado!"};
}





const number = Math.floor(Math.random() * 100000)


const remetente = nodemailer.createTransport({
  host:'smtp.zoho.com',
  port:'465',
  secure: true,
  auth:{
  user: 'support@skap.tv',
  pass: process.env.mailpass,
      }
  })

  var emailASerEnviado = {
    from: 'support@skap.tv',
    to: `${Email}`,
    subject:"Verificação Skap",
    text:  `Passos para verificar:
    1- Acesse sua conta
    2- Aperte no link abaixo com sua conta logada no skap
    3- Pronto! A verificação ocorrerar automaticamente.
    
    Confirme sua conta no skap: https://skap.tv/check/?verify=${number}`,
    };
 
   await remetente.sendMail(emailASerEnviado)
   .then(data=>{
    
     console.error("ok "+ data);
   })
   .catch(err=>{
    
     console.error("err "+ err);
   })
 
   
const HashPass = bcrypt.hashSync(Pass,12)
const usercreated = await user.create({Nick:Nick,Email:Email,Pass:HashPass,Date:Date.now,EmailVerificado:false,Number:number});
await channel.create({_id:usercreated._id,Owner:Nick,Subs:0,Follows:0});
const token = jwt.sign({data:{Nick,Id:usercreated._id} }, process.env.privateKey,{expiresIn:18000});



return token;

}