import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

    <div className="App">
      <Navbar />
       <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
       </Routes>
    </div>   

    </BrowserRouter>
  );
}

export default App;
