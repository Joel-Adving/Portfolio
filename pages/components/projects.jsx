import ProjectCard from './common/ProjectCard'

const Projects = () => {
  return (
    <section className="flex flex-col z-10 px-4 bg-offWhite pb-44">
      <div className=" max-w-6xl flex flex-col self-center">
        <h1 className=" text-5xl my-28 self-center font-semibold text-main-black ml-4">
          PROJECTS
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          {/* <div className="flex flex-wrap justify-center self-center mb-4"> */}
          <ProjectCard title="Project 1" description="lorem ipsum 123 " />
          <ProjectCard title="Project 2" description="lorem ipsum 123 " />
          <ProjectCard title="Project 3" description="lorem ipsum 123 " />
          <ProjectCard title="Project 4" description="lorem ipsum 123 " />
        </div>
      </div>
    </section>
  )
}

export default Projects
