export default function ShopCard(props) {
    return (
      <>
        <div> 
            <p>{props.card.name}</p>
            <p>{props.card.color}</p>
            <p>{props.card.price}</p>
            <p><img src={props.card.img} ></img></p>
        </div>
      </>
    )
}