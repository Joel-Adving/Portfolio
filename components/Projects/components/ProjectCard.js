const ProjectCard = (props) => {
  return (
    <div className="my-4">
      <img className=" max-w-sm" src={props.img} alt="" height="auto" wdith="auto" />
      <div className="">{props.title}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default ProjectCard
