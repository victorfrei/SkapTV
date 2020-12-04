
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
        if(req.method=="POST"){
            console.log("jwt:"+jwt.verify(req.body.key,process.env.privateKey)==null)
            jwt.verify(req.body.key,process.env.privateKey);
            res.statusCode = 200
            res.send("ok");
        }

}