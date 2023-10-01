
import './App.css'
import { Route, Routes } from 'react-router'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import CreatePost from './components/CreatePost'
import ViewPost from './components/ViewPost'

function App() {

  return (
    <>
      <Menu />
      <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts/new' element={<CreatePost />} />
            <Route path='/posts/:postId' element={<ViewPost />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
      </div>
    </>
  )
}

export default App
