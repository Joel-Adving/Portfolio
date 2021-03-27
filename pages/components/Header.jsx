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
            height="10"
            width="10"
          />
        </a>
        <nav className="flex self-center">
          <ul class={header ? 'ul active' : 'ul'} className="md:-ml-1">
            <li className="mx-2">
              <a
                className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
                href="https://resume.io/r/8XMj9OEWN"
              >
                RESUME
              </a>
            </li>

            <li className="mx-2">
              <a
                className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
                href="#"
              >
                ABOUT
              </a>
            </li>

            <li className="mx-2">
              <a
                className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
                href="#"
              >
                {' '}
                PROJECTS{' '}
              </a>
            </li>

            <li className="mx-2">
              <a
                className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
                href="#"
              >
                {' '}
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
