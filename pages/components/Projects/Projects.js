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
            link="#"
            title="Netflix UI"
            img="images/netflix.png"
            description="React and movie database API"
            githubLink="https://github.com/Joel-Adving/netflix-clone"
          />
          <ProjectCard
            title="Live Chat"
            link="https://chatroom-app-3f006.web.app/"
            img="images/chat.png"
            description="React and Firebase"
            githubLink="https://github.com/Joel-Adving/chat-room"
          />
          <ProjectCard
            link="#"
            title="Text Edtior "
            img="images/quire.png"
            description="Vanilla js and local storage"
            githubLink="https://github.com/MarcelR1998/fe19tp1_teamEraser"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
