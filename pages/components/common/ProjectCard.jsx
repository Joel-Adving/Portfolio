const ProjectCard = (props) => {
  return (
    <div className="flex flex-col h-64 min-w-full md:w-3/12 shadow rounded-sm m-4 bg-main-light_primary justify-center items-center">
      <p className="ml-4">{props.title}</p>
      <p className="">{props.description}</p>
    </div>
  )
}

export default ProjectCard
