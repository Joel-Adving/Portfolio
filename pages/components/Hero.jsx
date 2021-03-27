import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="z-10 h-screen w-100 text-main-white flex flex-col justify-center">
        <h1 className="flex self-center text-5xl text-center flex-col sm:flex-row">
          Hello, I'm<span className="text-main-primary ml-4">Joel Adving.</span>
        </h1>
        <p className="flex self-center text-3xl text-center mt-4 mx-12">
          {"I'm a <Front End Developer/>"}
        </p>
        <button className="rounded bg-discordTheme-dark text-main-white w-32 p-2 mt-6 self-center text-lg hover:bg-discordTheme-darkest hover:text-discordTheme-lightest">
          My Projects
        </button>
      </section>
    </>
  )
}

export default Hero
