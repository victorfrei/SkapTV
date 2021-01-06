
import mongoose from 'mongoose';

const Users = new mongoose.Schema(
    {
        spS_Name: String,
        spS_Sobrenome:String,
        spS_Email:String,
        spS_Nick:String,
        spS_Pass:String,
        spS_Avatar:String,
        spS_Premium:Boolean,
        spS_Balance:Number,
        spS_IdentidadeConfirmada:Boolean,
        spS_HasChannel:Boolean

    }
    )



export default async function User(req,resp){
    mongoose.connect(`mongodb+srv://Register:${process.env.R_Pass}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    const user = mongoose.model("User",Users);
    
if(req.method === "POST"){
    

    if(req.query.type == "1"){ //login
    
        
        resp.send("ok")
        // user.findOne({spS_Nick:req.body.Email,spS_Pass:req.body.Pass})
        // .then((data)=>{
        // if(data==null){
        //     resp.statusCode = 504;
        //     resp.send("Nothing Found!!");
        //  }else{
        //     resp.statusCode = 200;
        //     resp.send("");
        //  }
    // })
    
    // .catch((err)=>{
    //     resp.statusCode = 204;
    //     resp.send(err);
    // })
       
       
       }else if(req.query.type == "2"){ //register
        console.log(req.body)
        resp.send("ok");

       }else{

        resp.json({auth:"Not Allowed!",access:"Denied!",user:"Private"});

       }
              
    }else{
        resp.json({auth:"Not Allowed!",access:"Denied!",user:"Private"});
    }
   
}
