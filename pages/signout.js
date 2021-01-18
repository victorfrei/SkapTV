import {csrfToken, useSession} from 'next-auth/client';
import {Flex,Button, Avatar,Text, ButtonGroup, Link} from '@chakra-ui/react';
import {useRouter} from 'next/router';

export default function SignOut({csrfToken}){
    const [session] = useSession();
    const router = useRouter();
  
return (<>
{session && 
    <Flex flexDirection="column" justifyContent="center" h="100vh" alignItems="center">
    <Avatar src={session.user.image} name={session.user.name} size="lg"></Avatar>
    <Text>{session.user.name}</Text>
    <h1>Você tem certeza que deseja sair de ${session.user.name}?</h1>
    <form action="http://localhost:3000/api/auth/signout" method="POST">
    <input type="hidden" name="csrfToken" value={csrfToken}/>
    <ButtonGroup m="10px">
    <Button type="submit">Sair</Button>
    <Button onClick={()=>{router.replace("/")}}>Cancelar</Button>
    </ButtonGroup>
    </form>
    </Flex>
     
   
}

{!session &&
    <Flex flexDirection="column" justifyContent="center" h="100vh" alignItems="center">
    <h1>Para Fazer login entre na página de login:</h1>
    <Link href="/login" m="10px"><Button>Página de Login</Button></Link>
    </Flex>
}
</>
)

}


SignOut.getInitialProps = async (context) => {
    return {csrfToken: await csrfToken(context)}
}