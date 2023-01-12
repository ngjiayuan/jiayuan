import Head from 'next/head';
import { Inter } from '@next/font/google'
import MyNavbar from '../components/MyNavbar';
import Landing from '../components/Landing';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MyWorks from '../components/MyWorks';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jia Yuan — Software Developer</title>
        <link rel="icon" href="/hacker.png" />
      </Head>
      <MyNavbar />
      <div className="h-screen">
        <Landing />
      </div>
      <AboutMe />
      <MyWorks />
      <div className="h-screen">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
