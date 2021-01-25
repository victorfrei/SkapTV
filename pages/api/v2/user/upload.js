import {json,send} from 'micro';
import uuid from 'uuid/v1';
import mongoose from 'mongoose';
import Mux from '@mux/mux-node'
import { getSession } from 'next-auth/client';

// This assumes you have MUX_TOKEN_ID and MUX_TOKEN_SECRET 
// environment variables.
const { Video } = new Mux();

// All the `db` references here are going to be total pseudocode.

const Videos = new mongoose.Schema(
    {
        spS_Nome:String,
        spS_Description:String,
        sps_Avatar:String,
        spS_PostedBy:String,
        spS_Infos:Object,
        spS_Category:String,
        spS_Thumbnail:String,
        spS_Views:{type:Number,default:0},
        spS_Likes:{type:Number,default:0},
        spS_Public:{type:Boolean,default:true},
        spS_Date:{type:Date,default:Date.now()}
  
    }
    )
  
  



module.exports = async (req, res) => {
    const session = await getSession({req});

    if(session){
  const id = uuid();
  // Go ahead and grab any info you want from the request body.
  const assetInfo = await json(req.body);
  
  // Create a new upload using the Mux SDK.
  const upload = await Video.Uploads.create({
    // Set the CORS origin to your application.
    cors_origin: 'https://skap.tv',

    // Specify the settings used to create the new Asset after
    // the upload is complete
    new_asset_settings: {
      passthrough: id,
      playback_policy: 'public',
    }
  });
  const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
  const video = conn.model("videos",Videos);
  const db = new video({_id:id,spS_Infos:{uploadId:upload.id,metadata: assetInfo,status: 'waiting_for_upload'}})
  db.save();
    // Now send back that ID and the upload URL so the client can use it!
  send(res, 201, { id, url: upload.url });
}else{
    res.statusCode = 401;
    res.end();
}
}