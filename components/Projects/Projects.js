import ProjectCard from "./components/ProjectCard.js"

const Projects = () => {
  return (
    <section className="flex flex-col z-10 px-4 bg-offWhite pb- md:pb-44">
      <div className=" max-w-6xl flex flex-col self-center">
        <h1 className=" text-5xl my-16  md:my-24 self-center font-semibold text-main-black underline">
          PROJECTS
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center">
          {/* <div className="flex flex-wrap justify-center self-center mb-4"> */}
          <ProjectCard title="Netflix UI" img="images/netflix.png" description="Lorem aoiwdjaiuwdiuawhdiuwh"/>
          <ProjectCard title="Live Chat" link="https://chatroom-app-3f006.web.app/" img="images/chat.png" description="Lorem aoiwdjaiuwdiuawhdiuwh"/>
          <ProjectCard title="Deocument Text Edtior " img="images/quire.png" description="Lorem aoiwdjaiuwdiuawhdiuwh"/>
        </div>
      </div>
    </section>
  )
}

export default Projects
