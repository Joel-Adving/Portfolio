const ProjectCard = (props) => {
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
        <div className="flex items-center">{props.description}</div>
        <a href={props.githubLink} className=" text-xs text-transparent">
          <img
            src="images/github.png"
            height="32"
            width="32"
            className=" bg-main-white rounded-full border-main-primary border-2"
            alt="Github icon"
          />
          Link
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
