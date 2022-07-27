import React from "react";
import './App.css';
import Nav from "./componets/nav";
import All from "./componets/All/allProducts";
import {data} from './redux/reduces/data';
import {URL} from './redux/reduces/reducer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tech from "./componets/Tech/TechProducts";
import Clothes from "./componets/Clothes/ClothesProducts";
import Detail from "./componets/Detail/Detail";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {posts:[], popUp: {}}
    }

    componentDidMount() {
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                query:data
            }),    
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })  .then(response => response.json())
            .then (result => this.setState({posts:result.data.categories}));
    }

    setPopUp=(data)=> {
        this.setState({popUp: data})
        console.log('data =>',data)
    }

    render() {
        return(
            <>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/all" element={<All popUp={this.setPopUp} posts={this.state.posts} />}/>
                        <Route path="/clothes" element={<Clothes posts={this.state.posts} popUp={this.setPopUp} />}/>
                        <Route path="/tech" element={<Tech posts={this.state.posts} popUp={this.setPopUp} />}/>
                        <Route path="/product/:productId" element={
                        <Detail 
                           data={this.state.popUp}
                           posts={this.state.posts}/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default App