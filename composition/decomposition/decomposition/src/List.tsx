interface ListProp {
    elements: Array<{
        logo: JSX.Element,
        title: string
    }>
  }

export default function List(props: ListProp): JSX.Element {

    const listElements = props.elements.map((elem) =>
        <>
            {elem.logo}
            <p>{elem.title}</p>  
        </>
    )

    return (
        <>
            <div> 
                {listElements}
            </div>
        </>
    )
}
