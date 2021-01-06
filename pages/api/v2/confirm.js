import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import { redirect } from "next/dist/next-server/server/api-utils";
const ObjectId = Schema.ObjectId;


export default async function confirm(req,resp){

    const Users = new mongoose.Schema(
        {
            spS_Email:String,
            spS_Nick:String,
            spS_Pass:String,
            spS_Avatar:String,
            spS_Premium:{type:Boolean,default:false},
            spS_Balance:{type:Number,default:0},
            spS_IdentidadeConfirmada:{type:Boolean,default:false},
            spS_HasChannel:{type:Boolean,default:false},
            spS_Date:{type:Date,default:Date.now()}
    
        }
        )

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true,useFindAndModify:false});

 const user = conn.model("users",Users);
 const {spS_IdentidadeConfirmada,spS_Nick} = await user.findOne({_id:req.query.auth});




if(spS_IdentidadeConfirmada){
    resp.json({resposta:"O email já foi verificado!!",auth:"Access Denied!!"});
}else{
    const confirmuser = await user.findOneAndUpdate({_id:req.query.auth},{spS_IdentidadeConfirmada:true});
    confirmuser.save();  
    resp.json({resposta:`${spS_Nick.toUpperCase()} seu email foi verificado com sucesso! Você já pode sair dessa pagina e fazer o login!`,auth:"Access Allowed!!"});
    
}


}