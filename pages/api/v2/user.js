
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const Users = new mongoose.Schema(
    {
        spS_Email:String,
        spS_Nick:String,
        spS_Pass:String,
        spS_Avatar:{type:String,default:""},
        spS_Premium:{type:Boolean,default:false},
        spS_Balance:{type:Number,default:0},
        spS_IdentidadeConfirmada:{type:Boolean,default:false},
        spS_HasChannel:{type:Boolean,default:false},
        spS_Date:{type:Date,default:Date.now()}

    }
    )



export default async function User(req,resp){
    

if(req.method === "POST"){
    

if(req.query.type == "1"){ //login
    
        const conn = await mongoose.createConnection(`mongodb+srv://Login:${process.env.L_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
        const user = conn.model("users",Users);
        
       user.findOne({spS_Email:req.body.Email})
        .then((data)=>{
        if(data==null){
            resp.statusCode = 200;
            conn.close();
            resp.send({type:2}); 
         }else{
             if(data.spS_IdentidadeConfirmada==true){
                if(bcrypt.compareSync(req.body.Pass,data.spS_Pass)){
                resp.statusCode = 200;
                conn.close();
                resp.send({type:1,token:jwt.sign({auth:data._id,premium:data.spS_Premium,has_channel:data.spS_HasChannel,avatar:spS_Avatar,nick:spS_Nick},process.env.privatekey)})
                }else{
                    resp.send({type:2});
                }
             }else{
                resp.statusCode = 200;
                 conn.close();
                 resp.send({type:3});
             }
            
         }
    })
    
}else if(req.query.type == "2"){ //register
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    const user = conn.model("users",Users);
    const salt = bcrypt.genSaltSync(12);
    const Hashpass = bcrypt.hashSync(req.body.Pass,salt);
    const createuser = new user({
        spS_Email:req.body.Email,
        spS_Nick:req.body.Nick,
        spS_Pass:Hashpass})

        createuser.save()
        .then((data)=>{
            
            
            let transporter = nodemailer.createTransport({
              host: "smtp.zoho.com",
              port:   587,
              secure: false, // true for 465, false for other ports
              
              auth: {
                user: "support@skap.tv",
                pass: process.env.mailpass, 
              },
            });
          
            // send mail with defined transport object
            let info = transporter.sendMail({
        
              from: '"👻 Support Skap 👻" <support@skap.tv>', // sender address
              to: req.body.Email, // list of receivers
              subject: "Confirmação de Conta", // Subject line
              html: `<b>Confirme sua conta!!</b><br><br><a>https://skap.tv/api/v2/confirm?auth=${createuser._id}</a><br><br><br>Para ajuda mande mensagem para o suporte em: support@skap.tv<br><br>Atensiosamente, SkapTV.`,
              
            });
            info.catch((err)=>{console.error(err)})
           resp.send(data);
          })
          
         .catch((err)=>{
            console.log(err);
            resp.statusCode = 501
            resp.send(err);
        })








       }else{
        resp.statusCode = 504;
        resp.json({auth:"Not Allowed!"});

       }
              
    }else{
        resp.statusCode = 504;
        resp.json({auth:"Not Allowed!"});
    }
   
}
