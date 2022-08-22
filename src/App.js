import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./componets/nav";
import All from "./componets/All/allProducts";
import Tech from "./componets/Tech/TechProducts";
import Clothes from "./componets/Clothes/ClothesProducts";
import Detail from './componets/Detail/Detail';
import Cart from "./componets/carts/cart";

class App extends React.Component {
    render() {
        return(
            <>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={ <All /> } />
                        <Route path="/clothes" element={ <Clothes />}/>
                        <Route path="/tech" element={<Tech />}/>
                        <Route path="/product/:id" element={ <Detail />} />
                        <Route path="/cart" element={ <Cart /> } />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default App;