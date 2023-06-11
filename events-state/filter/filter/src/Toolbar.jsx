import './Toolbar.css'

export default function Toolbar(props) {
    const listFilters = props.filters.map((filter) => 
      <button
        className={ filter === props.selected ? 'toolbar_item_selected' : 'toolbar_item'}
        onClick={() => props.onSelectFilter(filter)}>{filter}
      </button>);

    return (
      <>
        <div> 
          {listFilters}
        </div>
      </>
    )
  }