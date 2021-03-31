const ProjectCard = (props) => {
  return (
    <div className="my-4">
    <a href={props.link}>
      <img className=" max-w-sm" src={props.img} alt="" height="auto" wdith="auto" />
    </a>
      <div className="">{props.title}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default ProjectCard
