const ProjectCard = props => {
  return (
    <div className="m-4">
      <a className="mt-2 text-xl" href={props.link}>
        <img
          className=" md:max-w-sm"
          src={props.img}
          alt=""
          height="auto"
          wdith="auto"
        />
        {props.title}
      </a>
      <div className="flex flex-row justify-between">
        <div className="flex ">{props.description}</div>
        <a href={props.githubLink} className="git__hub__icon flex self-center ">
          <img
            src="images/github.png"
            className="git__hub__icon bg-main-white rounded-full border-main-primary border-2"
            alt="Github icon"
          />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
