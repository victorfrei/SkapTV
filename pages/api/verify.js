
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
        if(req.method=="POST"){
            jwt.verify(req.body.key,process.env.privateKey);
            res.statusCode = 200
            res.send(jwt.decode(req.body.key));
            res.send("ok");
        }

}