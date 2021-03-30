import ProjectCard from "./components/ProjectCard.js"

const Projects = () => {
  return (
    <section className="flex flex-col z-10 px-4 bg-offWhite pb- md:pb-44">
      <div className=" max-w-6xl flex flex-col self-center">
        <h1 className=" text-5xl my-16  md:my-24 self-center font-semibold text-main-black underline">
          PROJECTS
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center max-w-xl">
          {/* <div className="flex flex-wrap justify-center self-center mb-4"> */}
          <ProjectCard img="netflix.png" />
          <ProjectCard img="chat.png" />
          <ProjectCard img="quire.png" />
        </div>
      </div>
    </section>
  )
}

export default Projects
