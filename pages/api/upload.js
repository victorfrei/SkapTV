
import AWS from 'aws-sdk'
import bcrypt from 'bcrypt';

export default async function upload(req,resp){
    console.log("hello")
    if(req.method=="POST"){
        resp.send("ok")
    console.log("Uploading "+req.body.data.vid);
    AWS.config ={credentials:{accessKeyId:process.env.AKID,secretAccessKey:process.env.SAKEY}};
    const S3 = new AWS.S3();
    const params={
        ACL:"public-read",
        Bucket:"vid-skap",
        Key:`${req.body.data.name}/${bcrypt.hashSync(req.body.data.name,14)}`,
        Body: req.body.data.vid
    }

    const options={partSize: 10 * 1024*1024*1024}


    S3.upload(params,options,(err,data)=>{
       console.log("err "+err+" data "+data);
    })
    resp.end("upload done!");


    }
}