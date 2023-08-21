
import { useEffect, useState } from 'react';
import './App.css'
import Note from './components/Note';
import AddNoute from './components/AddNote';

function App() {
  interface Note {
    content: string;
    id: number;
  }

  async function ReloadNote() {
    const responce = await fetch("http://localhost:7070/notes");
    const data = await responce.json();
    
    SetArrNotes([...data]);
  }

  let arrStart: Note[] = []

  const [arrNotes, SetArrNotes] = useState([...arrStart]);

  useEffect(() => { ReloadNote() }, []);

  const handlerAddNote = async (event: any) => {
    event.preventDefault()
    
    const content: string = event.target.contentInput.value
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "content": content, "id": 0 }),
    };
  
    fetch('http://localhost:7070/notes', requestOptions)
      .then(() => {
        ReloadNote();
        event.target.contentInput.value = "";
      })
  }
  
  const handlerRemoveNote = (id: number): void => {
      const url: string = 'http://localhost:7070/notes/' + String(id)

      fetch( url, { method: 'DELETE' })
        .then(() => ReloadNote());
  }

  const handlerReloadNote = async () => { ReloadNote() }

  return (
    <>
      <div>
        <h1>Noutes</h1>
        <button onClick={() => handlerReloadNote()}>Reload</button>

        <AddNoute handlerAddNote={handlerAddNote} />

        {
          arrNotes.map((note: Note) => (
              <fieldset key={ note.id }>
                <Note title={note.content} />
                <button onClick={() => handlerRemoveNote(note.id)}>Del</button>
              </fieldset>
            )
          )
        }
      </div>
   </>
  )
}

export default App
