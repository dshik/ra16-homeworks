import ShopCard from './ShopCard';

export default function CardsView(props) {
    const shopCardList = props.cards.map((elem) =>
      <ShopCard card={elem}/>)

    return (
      <>
        <div> 
            <div>
                {shopCardList}
            </div>
        </div>
      </>
    )
}
