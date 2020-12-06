
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
        if(req.method=="POST"){
           try {
                jwt.verify(req.body.key,process.env.privateKey,null);
                res.statusCode = 200
                res.json({valid:true,values:jwt.decode(req.body.key)});
               } catch(err) {
                res.statusCode = 200
                res.json({valid:false}) 
              }
            
                       
        }

}