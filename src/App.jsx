import { useState } from "react";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Add } from "./pages/Add";
import { Detail } from "./pages/Detail";
import "./App.css";
 import ShopContextProvider from "./Components/contexts/shopContext";

import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
  
    <ShopContextProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/category' element={<Category/>}></Route>
      <Route exact path='/add' element={<Add/>}></Route>
      <Route exact path='/detail' element={<Detail/>}></Route>
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    

  );
}

export default App;
