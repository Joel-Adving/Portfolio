import { useState, useEffect } from 'react'

const Header = () => {
  const [header, setHeader] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 940) {
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
      <nav className="p-8">
        <ul class={header ? 'ul active' : 'ul'} className="md:-ml-1">
          <li className="mx-2">
            <a
              target="_blank"
              className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
              href="https://drive.google.com/file/d/1gIvQcijLPYDNb6eMpXggHow_l0weK-BE/view"
            >
              RESUME
            </a>
          </li>

          <li className="mx-2">
            <a
              className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
              href="#about"
            >
              ABOUT
            </a>
          </li>

          <li className="mx-2">
            <a
              className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
              href="#projects"
            >
              {' '}
              PROJECTS{' '}
            </a>
          </li>

          <li className="mx-2">
            <a
              className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
              href="#contact"
            >
              {' '}
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
