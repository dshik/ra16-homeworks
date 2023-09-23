import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'

export type UserList = Array<{
  id: number;
  name: string;
}>

function App() {

    type User = {
        id: number;
        name: string;
    }

    const userList0: Array<User> = []

  const urlList = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
  const [userList, setUserList] = useState(userList0)

  useEffect(() => {
    async function reloadUsers() {
        const responce = await fetch(urlList);
        const data = await responce.json();
        
        setUserList([...data]);
      }

    reloadUsers()

  }, [])

  return (
    <>
      <List userList={userList}/>
    </>
  )
}

export default App
