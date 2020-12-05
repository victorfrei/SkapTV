
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
        if(req.method=="POST"){
            if(jwt.verify(req.body.key,process.env.privateKey)){
            res.statusCode = 200
            res.json(jwt.decode(req.body.key))            
            }else{
                res.statusCode= 401;
            }
        }

}