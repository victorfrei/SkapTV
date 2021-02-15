import { csrfToken } from "next-auth/client"





export default function channel(){
    return <div></div>
}



channel.getInitialProps = async(ctx)=>{
return {
    crsftoken: await csrfToken(ctx)
}
}