export default function ProjectList(props) {
    const listItems = props.projects.map((pict) =>
                        <p><img src={pict.img} alt="text"></img></p>);

    return (
      <>
        <div>{listItems}</div>
      </>
    )
  }
