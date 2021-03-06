import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
      <style global jsx>{`
        body{
          background: #efefef;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
