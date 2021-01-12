import mongoose from 'mongoose';


export default async function dbUploads(req,res){

const Videos = new mongoose.Schema(
  {
      spS_Nome:String,
      spS_Description:String,
      spS_PostedBy:String,
      spS_Category:String,
      spS_Thumbnail:String,
      spS_Views:{type:Number,default:0},
      spS_Likes:{type:Number,default:0},
      spS_Public:{type:Boolean,default:true},
      spS_Date:{type:Date,default:Date.now()}

  }
  )


const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
const video = conn.model("videos",Videos);

const updatevideo = new video(req.body);
if(req.query.perm){
 updatevideo.save();
 res.send("criado!!");
}else{
    updatevideo.deleteOne();
    res.send("cancelado!!");
}

}