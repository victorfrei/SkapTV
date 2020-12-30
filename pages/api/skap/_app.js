

export default function app(req,resp){
        if(req.query.auth=='adhjsd sadvashdasbdhiu2981hj32uer902323fn2jhfg2u3hb2f23duh3'){
        resp.send("ok");
        }else{
                
                resp.end("Access Denied!!").status(401);
        }

}