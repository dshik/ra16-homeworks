import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './Store.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Store />
      </div>
    </>
  )
}

export default App
