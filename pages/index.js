import { useState } from 'react'

export default function Home() {
  const [header, setHeader] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className="flex flex-col bg-black">
      {/* Background Video*/}
      <video
        autoPlay
        loop
        muted
        class="object-cover w-screen h-screen fixed opacity-50"
      >
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Header */}
      <header className="flex fixed w-screen top-0 z-20 justify-center animated">
        <div className="flex flex-row w-8/12 justify-between items-center py-4">
          <a href="#">
            <img
              width="100"
              height="100"
              className=" rounded-full border-2 border-gray-900"
              src="profile.jpg"
              alt="..."
            />
          </a>
          <nav>
            <ul className="flex flex-row text-white font-semibold">
              <a href="#">
                <li className="mr-4">RESUME</li>
              </a>
              <a href="#">
                <li className="mr-4">ABOUT</li>
              </a>
              <a href="#">
                <li className="mr-4">PROJECTS</li>
              </a>
              <a href="#">
                <li className="mr-4">CONTACT</li>
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
        <section className="my-14 w-6/12 p-8 rounded-sm shadow-md flex flex-col self-center bg-white">
          <img
            width="300"
            height="300"
            className=" rounded-full self-center"
            src="profile.jpg"
            alt="..."
          />
          <h2 className="text-4xl my-8 self-center">About Me</h2>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
            libero? Dolorem recusandae doloremque aliquid eos odio eveniet
            corrupti labore rem?
          </p>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
            libero? Dolorem recusandae doloremque aliquid eos odio eveniet
            corrupti labore rem?
          </p>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
            libero? Dolorem recusandae doloremque aliquid eos odio eveniet
            corrupti labore rem?
          </p>
        </section>

        {/* Portfolio */}
        <h1 className=" text-6xl self-center font-semibold">Projects</h1>
        <section className="my-14 w-6/12 p-12  rounded-sm shadow-md flex self-center flex-wrap justify-around bg-white">
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project1
          </div>
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project2
          </div>
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project3
          </div>
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project4
          </div>
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project5
          </div>
          <div className="w-64 h-64 shadow rounded-sm mb-8 text-center pt-4">
            project6
          </div>
        </section>
      </main>
    </div>
  )
}
