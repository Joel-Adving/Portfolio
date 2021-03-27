import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-discordTheme-darkest z-10">
        <h2 className=" text-discordTheme-lightest text-xl text-center font-thin py-12">
          Joel Adving © {new Date().getFullYear()}
        </h2>
      </footer>
    </>
  )
}

export default Footer
