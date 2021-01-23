
import mongoose from 'mongoose';

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
  

export default async (req, res) => {
const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
const videos = conn.model("videos",Videos);
const usersvideos = await videos.find().sort({spS_Views:-1}).limit(req.body.amount);
res.send(JSON.stringify(usersvideos,null,3));
res.end()
}