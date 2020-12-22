import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PressConference from "./components/PressConferences/PressConference";
import Footer from "./components/Footer/Footer";
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>

            <div className="main-content">
                <div className="item-main-content">
                    <Navbar className="item-main-content"/>
                </div>
                <div className="item-main-content">
                    Блок рекламы
                </div>
                <div className="item-main-content">
                    <PressConference className="item-main-content"/>
                </div>
            </div>

            <Footer/>

            <Switch>
                <Route exact path='/'
                       render={
                           () => <Redirect to={"/"}/>
                       }
                />
                <Route path='/regulars'
                       render={() => <div>Чемпионаты стран</div>}
                />
            </Switch>
        </div>
    );
}

export default App;

