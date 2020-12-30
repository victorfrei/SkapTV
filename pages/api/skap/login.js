import Db from '../../../components/db/login';


export default async function handler(req, res) {
  if(req.query.auth=="adhjsdsadvashdasbdhiu2981hj32uer902323fn2jhfg2u3hb2f23duh3"){
  if(req.method == "POST"){
    res.statusCode = 200
    res.send(await Db(req.body));
    }else{
      res.send("Access Denied!!")
      res.statusCode = 401;
    }
  }else{
    res.send("Access Denied!!")
      res.statusCode = 401;
  }
  }