import './Toolbar.css'

export default function Toolbar(props) {

  const listFilters = props.filters.map((filter) => 
    filter === props.selected ?
    <button className='toolbar_item_selected' onClick={props.onSelectFilter} >{filter}</button> :
    <button className='toolbar_item' onClick={props.onSelectFilter} >{filter}</button>);
    
    return (
      <>
        <div> 
          {listFilters}
        </div>
      </>
    )
  }