import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Zeynep Özdem Web Site</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width"></meta>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>desgin by zey</footer>
    </div>
  )
}
export default Layout
