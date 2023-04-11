import Head from 'next/head'
import Work from '@/components/Work'
import Draw from '@/components/Draw'
import About from '@/components/About'
import World from '@/components/World'
import Design from '@/components/Design'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import BottomAbout from '@/components/BottomAbout'
import Infographics from '@/components/Infographics'

export default function Home() {
  return (
    <>
      <Head>
        <title>AVANT GROUP</title>
        <meta name="description" content="This web site maked by Safarali" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <Header />
        <About />
        <Infographics />
        <Design />
        <World />
        <Draw />
        <Services />
        <BottomAbout />
        <Work />
        <Footer />
      </>
    </>
  )
}
