
import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<shopcategory category="men"/>}/>
        <Route path='/womens' element={<shopcategory category="women"/>}/>
        <Route path='/kids' element={<shopcategory category="kids"/>}/>
        <Route path='product' element={<product/>}>
          <Route path=":productID" element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/> 
        <Route path='/login' element={<loginsignup/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
