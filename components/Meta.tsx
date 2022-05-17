import Head from 'next/head'

interface Props {
  title?: string
  keywords?: string
  description?: string
}

const Meta: React.FC<Props> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Online Shop',
  keywords: 'online shop, buy, store, shop',
  description: 'Explore and buy your needs',
}

export default Meta
