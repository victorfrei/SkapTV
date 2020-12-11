import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken';
const ObjectId = Schema.ObjectId;
export default async function confirm(req,resp){

    const userSchema = new Schema({
        Id: ObjectId,
        Nick: String,
        Email: String,
        Pass: String,
        date: {type:Date,default:Date.now},
        Profile: Object,
        EmailVerificado: Boolean,
        Number: Number
      });

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});

 const user = conn.model("User",userSchema);

 if(req.body.Token !=null||"0001"){
jwt.verify(req.body.Token,process.env.privateKey);
const {data:{Nick}} = jwt.decode(req.body.Token);
console.log(Nick)
const {Number} = await user.findOne({Nick});

 if(Number == req.body.Number){
    user.findOneAndUpdate({Nick},{EmailVerificado:true});
    resp.send(`${Nick.toUpperCase()} seu email foi verificado com sucesso! Sua senha secreta é: ${Number}.
    Guardi-a pois ela será requisitada quando você for fazer alguma modificação em sua conta ou transações bancarias.
    Para evitar o uso indevido do seus cartões de creditos(crianças,hackers...) e para sua maior segurança. 
    `);
 }else{
     resp.send("Não foi possivel verificar seu email!!");
 }
 }else{
     resp.send("É necessario está logado para confirmar o email! Se preferir tenter acessar pelo computador.");
 }
}