const About = () => {
  return (
    <>
      <section className="flex flex-col z-10 px-4 bg-main-white pb-32">
        <div className=" max-w-6xl flex flex-col self-center">
          <h2 className="self-center text-5xl font-semibold my-24">ABOUT</h2>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div>
                <p className="text-center text-3xl font-bold">Fast</p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold">Responsive</p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  My layouts will work on any device, big or small.
                </p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold">Intuitive</p>
                <p className="w-64 text-center mb-20 md:mb-0">
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-24 justify-between ">
            <div className="flex flex-col mr-0 md:mr-20">
              <img
                width="250"
                height="250"
                className=" rounded-full self-center"
                src="profile.jpg"
                alt="..."
              />
              <h2 className="text-center font-semibold text-3xl py-4">
                Thats me!
              </h2>
              <p className=" mx-6 md:mx-6 sm:max-w-md text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                velit fugiat maxime vitae ea quidem ullam dolorum ut assumenda
                libero? quidem ullam dolorum ut assumenda
              </p>
            </div>
            <div className="flex flex-col self-center mt-24 md:mt-0 w-full md:w-5/12">
              <h1 className="mb-2 font-semibold text-3xl text-center">
                Tech Stack
              </h1>
              <div className=" mb-3 p-1 bg-main-primary rounded">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
