import { useState } from 'react'
import './App.css'
import './main.css'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function ShopItemFunc(props) {
  return (
    <>
      <div class="main-content">
        <h2>{props.item.brand}</h2>
        <h1>{props.item.title}</h1>
        <h3>{props.item.description}</h3>
        <div class="description">
          {props.item.descriptionFull}
        </div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{props.item.currency}{(props.item.price).toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
    </>
  )
}

export default App
