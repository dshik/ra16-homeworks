import { useState, useEffect } from "react"
import './App.css'
import Watch from './components/Watch'

function App() {
  interface Watch {
    title: string;
    delta: number;
    id: string;
  }

  let arrWatch: Watch[] = [
    {
        title: 'Moscow',
        delta: 3,
        id: "Moscow03",
    },
    {
      title: 'London',
      delta: 0,
      id: "London00",
    },
    {
      title: 'Tokio',
      delta: 9,
      id: "Tokio09",
    },
  ]

  function defineIndex(watchID: string): number {
    let index = -1;
    for (let i=0; i < arrActualWatch.length; i++) {
        if (arrActualWatch[i].id === watchID) {
          index = i;
          break;
        }
    }
    return index
  }

  function makeID(title: string, delta: number): string {
    let strDelta: string = String(delta);
    if (delta < 10) {
      strDelta = "0"+strDelta;
    }
    return title + strDelta
  }

  const [time, setTime] = useState(new Date());
  const [arrActualWatch, SetArrActualWatch] = useState([...arrWatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
      return () => clearInterval(interval);
    }, []);

  const handlerAddWatch = (event: any): void => {
    event.preventDefault()
    
    const title: string = event.target.titleInput.value
    const  delta: number = Number(event.target.deltaInput.value)
    const watchID: string = makeID(title, delta)
    const value: Watch = {
      title: title,
      delta: delta,
      id: watchID
    }

    if (defineIndex(watchID) < 0) {
      SetArrActualWatch([...arrActualWatch, value]);
      event.target.titleInput.value = "";
      event.target.deltaInput.value = "";
    } else {
      alert("Такие часы уже есть")
    }
  }

  const handlerRemoveWatch = (watchID: string): void => {
    const index = defineIndex(watchID);
    if (index < 0) {
      SetArrActualWatch([...arrActualWatch.slice(0, index), ...arrActualWatch.slice(index + 1)]);
    }
    
}
  return (
    <>
      <div>
        <h1>Hello</h1>
        
        <form onSubmit={handlerAddWatch}>
          <fieldset>
            <legend>Добавить часы</legend>
            <label htmlFor="titleInput">Город   </label>
            <input
              id = "titleInput"
              placeholder="Город"
            />
            <label htmlFor="deltaInput">   Смещение от GMT   </label>
            <input
              id = "deltaInput"
              placeholder="ч"
              type="number"
              defaultValue={0}
            />
            <button>Добавить</button>                        
          </fieldset>
        </form>
        <ul>
          {
            arrActualWatch.map((watch: Watch) => (
                <li key={ watch.id }>
                  <fieldset>
                    <Watch title={watch.title} delta={watch.delta} timeNow={time}/>
                    <button onClick={() => handlerRemoveWatch(watch.id)}>Del</button>
                  </fieldset>
                </li>
              )
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App
