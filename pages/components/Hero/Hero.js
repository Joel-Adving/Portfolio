import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="z-10 h-screen w-100 text-main-white flex flex-col justify-center">
        <h1 className="flex self-center text-5xl text-center flex-col sm:flex-row">
          Hello, I'm<span className="text-main-primary ml-4">Joel Adving.</span>
        </h1>
        <h2 className="flex self-center text-3xl text-center mt-4 mx-12">
          {"I'm a <Front End Developer/>"}
        </h2>
        <a href="#about" className="self-center ">
          <button className="rounded bg-discordTheme-dark text-main-white p-2 px-4 mt-6 text-lg hover:bg-discordTheme-darkest hover:text-discordTheme-lightest">
            View My Work
          </button>
        </a>
      </section>
    </>
  )
}

export default Hero
