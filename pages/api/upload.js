
import AWS from 'aws-sdk'
import bcrypt from 'bcrypt';

export default function upload(req,resp){
    AWS.config ={credentials:{accessKeyId:process.env.AKID,secretAccessKey:process.env.SAKEY}};
    const S3 = new AWS.S3();
    const params={
        ACL:"public-read",
        Bucket:"vid-skap",
        Key:`${req.body.data.name}/${bcrypt.hashSync(req.body.data.name,14)}`,
        Body = "Olá mundo"
    }

    const options={partSize= 10 * 1024^3}


    S3.upload(params,options,(err,data)=>{
        console.log("err "+err+" data "+data);
    })
    resp.end("upload done!");



}