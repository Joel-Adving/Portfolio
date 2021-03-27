import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <>
      <Head>
        <title>Joel Adving</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="A portfolio showcasing my work as a developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col bg-black">
        {/* Background Video*/}
        <video
          autoPlay
          loop
          muted
          class="object-cover w-screen h-screen fixed opacity-60"
        >
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>

        {/* Header */}
        <header
          class={header ? 'header active' : 'header'}
          className=" hidden sm:flex bg-green-500 invisible sm:visible"
        >
          <div className="flex flex-row w-8/12 justify-center md:justify-between md:translate-x-36 items-center h-32">
            <a href="#">
              <h3
                class={header ? 'h3 active' : 'h3'}
                className="mr-3 invisible md:visible"
              >
                JOEL ADVING
              </h3>
              {/* <img
              className=" rounded-full border-2 border-gray-900 md:visible sm:hidden hidden sd:w-0 sd:h-0 w-24 h-24"
              src="profile.jpg"
              alt="..."
            /> */}
            </a>
            <nav className="">
              <ul
                class={header ? 'ul active' : 'ul'}
                className="md:-ml-1  bg-red-400"
              >
                <a href="https://resume.io/r/8XMj9OEWN">
                  <li className="mx-2">RESUME</li>
                </a>
                <a href="#">
                  <li className="mx-2">ABOUT</li>
                </a>
                <a href="#">
                  <li className="mx-2">PROJECTS</li>
                </a>
                <a href="#">
                  <li className="mx-2">CONTACT</li>
                </a>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="z-10 h-screen w-100 text-white flex flex-col justify-center">
          <h1 className="flex self-center text-8xl text-center">Joel Adving</h1>
          <p className="flex self-center text-3xl text-center mt-8">
            Front End Developer
          </p>
          <button className="rounded bg-blue-500 w-32 p-2 mt-8 self-center">
            My Projects
          </button>
        </section>

        {/* Main Content */}
        <main className="flex flex-col z-10 bg-gray-100">
          {/* About Section */}
          <section className="mt-24 my-14 max-w-screen-md p-8 rounded-sm shadow-md flex flex-col self-center bg-white">
            <img
              width="300"
              height="300"
              className=" rounded-full self-center"
              src="profile.jpg"
              alt="..."
            />
            <h2 className="text-4xl my-8 mb-0 self-center text-center">
              About Me
            </h2>
            <div className="p-6">
              <p className=" text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
                libero? Dolorem recusandae doloremque aliquid eos odio eveniet
                corrupti labore rem?
              </p>
              <p className="mt-4 text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
                libero? Dolorem recusandae doloremque aliquid eos odio eveniet
                corrupti labore rem?
              </p>
            </div>
          </section>

          {/* Portfolio */}
          <h1 className=" text-6xl mt-8 self-center font-semibold">Projects</h1>
          <section className="my-14 w-10/12 flex self-center flex-wrap justify-center">
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project1
            </div>
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project2
            </div>
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project3
            </div>
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project4
            </div>
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project5
            </div>
            <div className="w-64 h-64 shadow rounded-sm m-4 text-center pt-4 bg-white">
              project6
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-blue-600 z-10">
          <h2 className="text-white text-xl text-center py-12">
            Copyright © {new Date().getFullYear()} Joel Adving
          </h2>
        </footer>
      </div>
    </>
  )
}
