
 import mongoose from 'mongoose';


export default async function uploadvideo(req,resp){

if(req.method=="POST"){
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
        
    const videoSchema = new Schema({
        Id: ObjectId,
        Name: String,
        Description: String,
        PostedDate: {type:Date,default:Date.now()},
        PostedBy:String,
        Likes: Number,
        Comments: {Amount: Number,Comments:Object},
        Dislikes: Number,
        Views: Number,
        });
    
    
    
    
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
     useUnifiedTopology: true});
     
    const videos = conn.model("Videos",videoSchema);
    

    resp.send(await videos.create({PostedBy:req.body.name,Name:req.body.nvideo,Description:req.body.desc}));
                 



    }


}