import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects';
import Common from './Component/Common';


function App(){

 
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Agence' element={<Agence/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}
export default App;