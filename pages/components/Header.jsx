import { useState, useEffect } from 'react'

const Header = () => {
  const [header, setHeader] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])
  return (
    <header
      class={header ? 'header active' : 'header'}
      className=" hidden sm:flex  invisible sm:visible"
    >
      <div className="flex flex-1 flex-row py-1 px-2 sm:py-8 justify-between  lg:max-w-6xl ">
        <a href="#">
          {/* <h3
            class={header ? 'h3 active' : 'h3'}
            className="mr-3 invisible md:visible"
          >
            JOEL ADVING
          </h3> */}
          <img
            className=" rounded-full w-10 h-10 sm:w-14 sm:h-14 ml-1"
            src="profile.jpg"
            alt="..."
          />
        </a>
        <nav className="flex self-center">
          <ul class={header ? 'ul active' : 'ul'} className="md:-ml-1">
            <a href="https://resume.io/r/8XMj9OEWN">
              <li className="mx-2 hover:text-discordTheme-lightest">RESUME</li>
            </a>
            <a href="#">
              <li className="mx-2 hover:text-discordTheme-lightest">ABOUT</li>
            </a>
            <a href="#">
              <li className="mx-2 hover:text-discordTheme-lightest">
                PROJECTS
              </li>
            </a>
            <a href="#">
              <li className="mx-2 hover:text-discordTheme-lightest">CONTACT</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
