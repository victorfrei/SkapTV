import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer';


const Users = new mongoose.Schema(
  {
      email:String,
      name:String,
      pass:String,
      image:{type:String,default:""},
      Premium:{type:Boolean,default:false},
      Balance:{type:Number,default:0},
      IdentidadeConfirmada:{type:Boolean,default:false},
      HasChannel:{type:Boolean,default:false},
      createdAt:{type:Date,default:Date.now()},
      updatedAt:{type:Date,default:Date.now()}
  }
  )




const options = {
  jwt:{
  secret: process.env.SECRET,
  },
  pages:{
    signIn: '/login',
    signOut: '/signout',
    error: '/callback',
  },
  debug: true,

  // Configure one or more authentication providers
  providers: [
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET
    }),
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.Credentials({
      authorize: async (credentials) => 
      {
        console.log(credentials);
        if(credentials.name=="" || credentials.email=="" || credentials.pass==""){
          Promise.reject(new Error("Sem dados!!"));
        }else{
        if(credentials.register=='true'){

        const conn = await mongoose.createConnection(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        const user = conn.model("users",Users);
        const findedemail = await user.findOne({email:credentials.email})
        const findedname = await user.findOne({name:credentials.name})
        if(findedemail==null){
          if(findedname==null){
            console.log(process.env.SECRET);
            const hash = bcrypt.hashSync(credentials.pass,bcrypt.genSaltSync(14))
            const newuser = await new user({
              email:credentials.email,
              name:credentials.name,
              pass:hash});
              newuser.save();
              return Promise.resolve(newuser);
          }else{
            return Promise.reject(`/register?error=true&sms=Nickname usado, utilize outro nickname!`);
          }
            
        }else{
          return Promise.reject(`/register?error=true&sms=Email existente, digite outro email!`);
        }
        
         
        }else{
        const conn = await mongoose.createConnection(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        const user = conn.model("users",Users);
        const findeduser = await user.findOne({email:credentials.email})
        if(findeduser==null){
          return Promise.reject("/login?error=true&sms=Email incorreto");
        }else{
          if(findeduser.pass==null||findeduser.pass==""){
            return Promise.reject("/login?error=true&sms=Necessario criar uma senha para sua conta!")
          }else{
          const compare = bcrypt.compareSync(credentials.pass,findeduser.pass);
          if(compare){  
          return Promise.resolve(findeduser);
          }else{
            return Promise.reject("/login?error=true&sms=Email ou Senha incorretos!")
          }
        }
        }

        }
        
        
      }
    }
    })
  ],
  session:{
    jwt: true,
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)