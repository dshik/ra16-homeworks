
import { useState } from 'react';
import './App.css'
import JSONFetch from './components/JSONFetch';

function App() {
  const [urlActive, setUrlActive] = useState("http://localhost:7070/data")

   
  const handlerOK = (): void => {
    setUrlActive("http://localhost:7070/data");  
  }

  const handlerLoading = (): void => {
    setUrlActive("http://localhost:7070/loading");
  }

  const handlerError = (): void => {
    setUrlActive("http://localhost:7070/error");
  }

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => handlerOK()}>ОК</button>
      <button onClick={() => handlerLoading()}>Loading</button>
      <button onClick={() => handlerError()}>Error</button>
      <JSONFetch url={urlActive}/>
    </>
  )
}

export default App
