const Header = () => {
  return (
    <header
      className={'header'}
      className=" hidden sm:flex  invisible sm:visible"
    >
      <nav className="p-8">
        <ul className={'ul'} className="md:-ml-1">
          <li className="mx-2">
            <a
              className=" py-3 sm:p-2 hover:text-discordTheme-lightest"
              href="https://drive.google.com/file/d/19OCuRUOowrcfMhwulT3EdU0zkLc0GjTF/view?usp=sharing"
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
