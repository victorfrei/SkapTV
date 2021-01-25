
import mongoose from 'mongoose';
import {getSession} from 'next-auth/client'

export default async (req, res) => {
  //console.log(req);
const session = await getSession({req})

if (session) {

const Videos = new mongoose.Schema(
  {
      spS_Nome:String,
      spS_Description:String,
      sps_Avatar:String,
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
const uservideos = await video.find({spS_PostedBy:session.user.name});
res.send(JSON.stringify(uservideos,null,3));
  } else {
    // Not Signed in
    res.status(503)
  }
  res.end()
}