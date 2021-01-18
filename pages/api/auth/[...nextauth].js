import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  jwt:{
  secret:'INp8sdkQayeMcoGAgFGoA61DsaKSJad8AsShd9aasnXJZkgz8PSnw',
  },
  pages:{
    signIn: '/login',
    signOut: '/signout',
    error: '/callback',
  },
  debug: true,

  // Configure one or more authentication providers
  providers: [
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET
    }),
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => 
      {
        console.log(credentials)
         return Promise.resolve(null);
      }
      
    })
  ],
  session:{
    jwt: true,
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)