
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import sg from 'sendgrid-mail';


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

const number = Math.random(100000,999999);

<<<<<<< HEAD
=======
sg({
  apikey:{process.env.SendGrid},
  to: [`${Nick}<${Email}>`],
  cc: [],
  bcc: [],

  // Optional from/replyTo fields.
  // The from address must be a verified sender in your SendGrid account.
  from: 'Skap <vic.frei2@gmail.com>',

  // Optional subject of the email
  subject: 'Skap(Criação de Conta)',

  // Optional body of the email
  body: `Seu código é:${number}`,

  // Optional content type of email body.
  contentType: 'text/html',

  // Optionally avoid sending empty emails
  suppressEmpty: true,

})






>>>>>>> 9762902be76ce49608fc5b74a3a0248d500306fb


const HashPass = bcrypt.hashSync(Pass,12)
const log = await user.create({Nick:Nick,Email:Email,Pass:HashPass,Date:Date.now});
return log;
// const token = jwt.sign({exp:60*60,data:{id:_id,profile:"img"} }, process.env.privateKey);
      // return token;

}
