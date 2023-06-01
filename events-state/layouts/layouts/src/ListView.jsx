import RowList from './RowList';

export default function ListView(props) {
  const shopCardList = props.products.map((elem) =>
    <RowList card={elem}/>)

    return (
      <>
        <div> 
            {shopCardList}
        </div>
      </>
    )
}
