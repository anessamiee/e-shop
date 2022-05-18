import type { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import axios from 'axios'
import { User } from '../../../types'

const options = {
  providers: [
    CredentialsProvider({
      name: 'Mock Data',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        const res = await axios('https://fakestoreapi.com/users')
        const users = await res.data
        const user = users.find((user: User) => {
          if (
            user.username === credentials?.username &&
            user.password === credentials?.password
          ) {
            return user
          }
        })
        if (user) {
          const s: User = user
          return s
        } else {
          return null
        }
      },
    }),
  ],
}
export default  (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
//   callbacks: {
//     // jwt: async ({token,user}) => {
//     //     if(user) {
//     //         token.id
//     //     }
//     // },
//     // session: () => {},
//     async jwt({ token, account }) {
//       // Persist the OAuth access_token to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token
//       }
//       return token
//     },
//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.accessToken = token.accessToken
//       return session
//     },
//   },
//   secret: 'test',
//   jwt: {
//     secret: 'test',
//     encryption: true;
//   }
