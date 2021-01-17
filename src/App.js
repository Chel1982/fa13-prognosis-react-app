import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import PressConferenceContainer from "./components/PressConference/PressConferenceContainer";
import TournamentListContainer from "./components/TournamentList/TournamentListContainer";

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
                <Switch>
                    <Route exact path='/'
                           render={
                               () => <PressConferenceContainer type='all' className="item-main-content"/>
                           }
                    />
                    <Route path='/regulars' render={() => <TournamentListContainer status='regular' />} />
                    <Route path='/cups' render={() => <TournamentListContainer status='cup' />} />
                    <Route path='/press-conferences/tournament/:id'
                           render={() => <PressConferenceContainer
                               type='tournament'
                               className="item-main-content"/>
                           }/>
                    <Route path='*'
                           render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

