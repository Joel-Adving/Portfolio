import Background from "../components/Background"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="My front end development portfolio."/>
        <meta name="robots" content="index, follow" />
        <title>Joel Adving</title> 
      </Head>
      <main className="flex flex-col bg-main-black overflow-x-hidden">
        <Background />
        <Hero />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
