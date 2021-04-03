const ProjectCard = (props) => {
  return (
    <div className="m-4">
      <a href={props.link}>
        <img
          className=" max-w-sm"
          src={props.img}
          alt=""
          height="auto"
          wdith="auto"
        />
      </a>
      <div className=" text-xl">{props.title}</div>
      <div className="flex flex-row justify-between items-center">
        <div>{props.description}</div>
        <a href={props.githubLink}>
          <img
            src="images/github.png"
            height="32"
            width="32"
            className="bg-main-white rounded-full border-main-primary border-2"
            alt="Github icon"
          />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
