
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
    Profile: Object,
    EmailVerificado: Boolean,
    Number: Number
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


const remetente = nodemailer.createTransport({
  host:'smtp.zoho.com',
  port:'465',
  secure: true,
  auth:{
  user: 'support@skap.tv',
  pass: process.env.mailpass 
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
 
   remetente.sendMail(emailASerEnviado)
   .then(data=>{
     console.log("ok "+ data);
   })
   .catch(err=>{
     console.log("err "+ err);
   })
 

const HashPass = bcrypt.hashSync(Pass,12)
await user.create({Nick:Nick,Email:Email,Pass:HashPass,profile:"#",Date:Date.now,EmailVerificado:false,Number:number});
const token = jwt.sign({data:{Nick,profile:"#"} }, process.env.privateKey,{expiresIn:3600});



return token;

}