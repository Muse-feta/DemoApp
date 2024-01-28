import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import AddEmployee from './AddEmployee';
import LoginEmployee from './LoginEmployee';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/add" element={<AddEmployee />}></Route>
      <Route path="/login" element={<LoginEmployee />}></Route>
    </Routes>
  )
}

export default App
