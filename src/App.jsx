import './App.css'
import Regular from './pages/Regular'
import Redirect from './pages/Redirect'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'



function App() {
  return (
   <Routes>
    <Route path='/' element={<Regular/>}/>
    <Route path='redirect/:slug' element={<Redirect/>}/>
   </Routes>
  )
}

export default App
