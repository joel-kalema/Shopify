import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./componets/nav";
import All from "./componets/All/allProducts";
import { data, URL } from './redux/reducers/data';
import Tech from "./componets/Tech/TechProducts";
import Clothes from "./componets/Clothes/ClothesProducts";
import Detail from './componets/Detail/Detail';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {posts:[], popUp: {}, basket: {}}
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
        // console.log('data =>',data)
    }

    render() {
        return(
            <>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<All popUp={this.setPopUp} posts={this.state.posts} basket={this.setbasket} />}/>
                        <Route path="/clothes" element={<Clothes posts={this.state.posts} popUp={this.setPopUp} />}/>
                        <Route path="/tech" element={<Tech posts={this.state.posts} popUp={this.setPopUp} />}/>
                        <Route path="/product/:productId" element={
                        <Detail 
                            basket={this.setbasket}
                            data={this.state.popUp}
                            posts={this.state.posts}/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default App;