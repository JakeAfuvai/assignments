import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import ProductList from "./ProductList"
import Product from "./Product"
import Navbar from "./Navbar"

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/product_list" component={ProductList} />
                <Route path="/product_list/:_id" component={Product}/>
            </Switch>  
        </div>
    )
}

export default App