import Head from 'next/head'
import HeroAbout from '../components/HeroAbout'


function about() {
  return (
    <div>
      <Head>
        <title>La Laundry - About</title>
        <link rel="icon" href="/img/laundry-logo-white-small.png" />
      </Head>
      <HeroAbout />
    </div>
  )
}

export default about