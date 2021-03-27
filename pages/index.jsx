import Projects from './components/projects'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Header from './components/Header'
import Background from './components/Background'
import Meta from './components/Meta'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en-us" />
        <title>Joel Adving</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Joel Adving - portfolio - front end developer"
        />
      </Head>
      <main className="flex flex-col bg-main-black">
        <Background />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
