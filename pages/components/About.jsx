import { useState, useEffect } from 'react'

const About = () => {
  const [about, setAbout] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 940) {
      setAbout(true)
    } else {
      setAbout(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <>
      <section className="flex flex-col z-10 px-4 bg-main-white pb-32">
        <div className=" max-w-6xl flex flex-col self-center">
          <h2 class={about ? 'about active' : 'about'} className="">
            ABOUT
          </h2>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-0 md:mb-8">
              <div>
                <p className="text-center text-3xl font-bold mb-4">Fast</p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold mb-4">
                  Responsive
                </p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  My layouts will work on any device, big or small.
                </p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold mb-4">Intuitive</p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-0 md:mt-24 justify-evenly ">
            <div className="flex flex-col ">
              <img
                width="250"
                height="250"
                className=" rounded-full self-center"
                src="profile.jpg"
                alt="..."
              />
              <h2 className="text-center font-semibold text-3xl py-10 mx-4   md:py-4  md:mx-4">
                Thats me!
              </h2>
              <p className=" mx-6  sm:max-w-md text-center">
                Born and raised in Stockholm, Sweden. I'm very passionate about
                programming modern and responsive web apps. I'm currently
                interning at Redmind and BrickTechology.
              </p>
            </div>
            <div className="mt-20 sm:mt-0 md:w-4/12 flex flex-col items-center md:items-start">
              <h1 className="mb-6 font-semibold text-3xl">
                Current Tech Stack
              </h1>
              <div className="mt-2">Languages and Frameworks:</div>
              <div className="flex flex-wrap w-7/12 md:w-10/12 justify-center md:justify-start">
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/html5.svg"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/css.svg"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/js.svg"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/ts.svg"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/react.svg"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/tailwind.svg"
                  />
                  <div></div>
                </div>

                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="next.png"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/node.svg"
                  />
                  <div></div>
                </div>
              </div>
              <div className="mt-8 md:mt-4 flex ">Tools and IDEs:</div>
              <div className="flex flex-wrap self-center w-7/12 md:w-full justify-center md:justify-start">
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="git.png"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="vscode.png"
                  />
                  <div></div>
                </div>
                <div className=" flex flex-row items-center justify-center mx-2 mt-4">
                  <img
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="svg/firebase.svg"
                  />
                  <div></div>
                </div>
                {/* <div className=" flex flex-row items-center mx-2 mt-4">
                  <img
                    height="48"
                    width="48"
                    alt="Tech stack images"
                    className="h-12 w-12"
                    src="androidStudio.png"
                  />
                  <div></div>
                </div> */}
              </div>
              {/* <div className=" mb-3 p-1 bg-main-primary rounded">
                CSS3 - HTML5
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                JavaScript - TypeScript
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                React - Next - Gatsby - React Native
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                StyledComponents - css modules - Tailwindcss
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                Node - Express - MongoDB
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                Vercel - Netlify
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                Firebase - AWS
              </div>
              <div className=" mb-3 p-1 bg-main-primary rounded">
                Version control - Git & GitHub
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
