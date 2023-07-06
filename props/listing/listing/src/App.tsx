
import './App.css'
import './main.css'
import './data.tsx'
import { data0 } from './data.tsx'
import Listing  from './Listing.tsx'
import type {OfferCardList} from "./type.tsx"

function App() {
  const data = data0.filter(function(elem) {
    return elem.state === "active";
  }) as unknown as [OfferCardList];

  return (
    <>
      <h1>Hello!</h1>
      <Listing  data = {data} />
    </>
  )
}

export default App
