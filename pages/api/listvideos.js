import mongoose from 'mongoose';
import Thumbnail from '../../components/thumbnail'


export default async function listvideo(req,resp){

    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
        
    const videoSchema = new Schema({
        Id: ObjectId,
        Name: String,
        Description: String,
        Categoria:String,
        Url:String,
        PostedDate: {type:Date,default:Date.now()},
        PostedBy:String,
        Likes: Number,
        Comments: {Amount: Number,Comments:Object},
        Dislikes: Number,
        Views: Number,
        });
    
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
     useUnifiedTopology: true})
     .catch(err=>{console.log(err)}) 

    const videos = conn.model("Videos",videoSchema);
    const homevideos = await videos.find().sort({Razao:-1});
  
    resp.send(homevideos);
    
}