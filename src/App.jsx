import Category from './Pages/Category';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'

function App() {

  const [AllCatData, setAllCatData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='container'>
            <Routes>
              <Route path='/Category' element={<Category AllData={AllCatData} setAllData={setAllCatData} />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
