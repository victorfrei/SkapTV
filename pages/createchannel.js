import { Box } from '@chakra-ui/react';
import mongoose from 'mongoose';
import { getSession } from 'next-auth/client';

const User = new mongoose.Schema(
    {
      name:String,
      haschannel: Boolean
    
    }
    )
  
  

    Createchannel.getInitialProps = async (ctx)=> {
    const session = await getSession(ctx)
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    const user = conn.model("users",User);
    const ur = await user.findOne({name:session.user.name})
    return {props:{user:ur}}
    }

export default function Createchannel(props){
   return <Box>{props.user}</Box>
}

