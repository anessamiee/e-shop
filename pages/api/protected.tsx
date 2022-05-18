import { getServerSession } from 'next-auth'

export default async (req, res) => {
  const session = await getServerSession({ req })
  if (session) {
    res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    })
  } else {
    res.send({ error: 'You must be signed in to access this api route' })
  }
}
