import Head from 'next/head'
import {motion} from 'framer-motion'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    return (
      <>
      <Head>
        <title>Akari NFT</title>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
        <link rel="stylesheet" href="https://use.typekit.net/vrc4mmd.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap" rel="stylesheet"></link>
      </Head>
        <Layout>
          <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}>
            <Component {...pageProps}/>
          </motion.div>
        </Layout>
      </>
    )
  }
  
export default MyApp