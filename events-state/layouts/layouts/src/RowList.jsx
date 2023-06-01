export default function RowList(props) {
    return (
      <>
        <div>
            <p><img src={props.card.img} ></img></p>
            <p>{props.card.name}</p>
            <p>{props.card.color}</p>
            <p>{props.card.price}</p> 
        </div>
      </>
    )
}