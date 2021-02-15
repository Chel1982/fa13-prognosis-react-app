import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch, withRouter} from "react-router-dom";
import PressConferenceContainer from "./components/PressConference/PressConferenceContainer";
import TournamentListContainer from "./components/TournamentList/TournamentListContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DiscussionContainer from "./components/Discussion/DiscussionContainer";
import {connect} from "react-redux";
import preloader from "./images/preloader.gif";
import {compose} from "redux";
import {initializeThunk} from "./redux/AppReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunk();
    }

    render() {
        if (!this.props.initialized) {
            return (
                <>
                    <img src={preloader}/>
                </>
                    )
        }
        return (
            <div>
                <HeaderContainer/>

                <div className="main-content">
                    <div className="item-main-content">
                        <Navbar className="item-main-content"/>
                    </div>
                    <div className="item-main-content">
                        {/*Блок рекламы*/}
                    </div>
                    <div className="item-main-content">
                        <Switch>
                            <Route exact path='/'
                                   render={
                                       () => <PressConferenceContainer type='all' className="item-main-content"/>
                                   }
                            />
                            <Route path='/regulars' render={() => <TournamentListContainer status='regular'/>}/>
                            <Route path='/cups' render={() => <TournamentListContainer status='cup'/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                            <Route path='/register' render={() => <RegisterContainer/>}/>
                            <Route path='/press-conferences/tournament/:id'
                                   render={() => <PressConferenceContainer
                                       type='tournament'
                                       className="item-main-content"/>
                                   }/>
                            <Route path='/discussion/game/id/:id' render={() => <DiscussionContainer type='game' />}/>
                            <Route path='/discussion/tournament/id/:id' render={() => <DiscussionContainer type='tournament' />}/>
                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appReducer.initialized
    }
}

export default compose(
    withRouter, connect(mapStateToProps, {initializeThunk}))
(App);

