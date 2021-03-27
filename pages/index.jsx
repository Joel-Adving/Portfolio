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
      <Meta />
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
