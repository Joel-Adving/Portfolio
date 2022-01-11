import ProjectCard from './components/ProjectCard.js'

const Projects = () => {
  return (
    <section
      // id="projects"
      className="flex flex-col z-10 px-4 bg-discordTheme-light pb-24 md:pb-44 text-main-white"
    >
      <div className="flex flex-col self-center">
        <h1 className=" text-5xl my-16  md:my-32 self-center font-semibold text-main-white">
          PROJECTS
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center">
          {/* <div className="flex flex-wrap justify-center self-center mb-4"> */}
          <ProjectCard
            title="Recipe app"
            link="https://forkify-black.vercel.app/"
            img="images/forkify.png"
            description="Vanilla js, MVC architecture, forkify API"
            githubLink="https://github.com/Joel-Adving/js_course/tree/main/forkify"
          />
          <ProjectCard
            title="Live Chat"
            link="https://chatroom-app-3f006.web.app/"
            img="images/chat.png"
            description="React, Firebase"
            githubLink="https://github.com/Joel-Adving/chat-room"
          />
          <ProjectCard
            title="Text Edtior "
            link="https://quire.vercel.app/"
            img="images/quire.png"
            description="Vanilla js, local storage, quill"
            githubLink="https://github.com/MarcelR1998/fe19tp1_teamEraser"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
