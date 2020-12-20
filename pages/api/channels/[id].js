
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;





const channelSchema = new Schema({
    Id: ObjectId,
    Name: String,
    Owner:String,
    Subs: Number,
    Follows: Number,
    Banner: String,
    Avatar: String,
    CreatedDate: {type:Date,default:Date.now},
    Layout: {type:Number,default:1},
    Verificado: Boolean,
    Color: String
  });

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

  export default async function handler(req,resp){

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const channel = conn.model("channels",channelSchema);
const videos = conn.model("videos",videoSchema);
const channelfound = await channel.findOne({_id:mongoose.Types.ObjectId(req.query.id)})

if(channelfound!=null){
    const {Owner,Layout} = channelfound;
    const videosfound = await videos.find({PostedBy:Owner});
    resp.send({Channel:channelfound,Videos:JSON.stringify(videosfound)});
}else{
    resp.send("O canal não foi encontrado!");
}




}