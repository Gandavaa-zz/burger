import React, { Component } from 'react';
import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
// class bolgoe

class App extends Component {

  state = {
    showSideBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { 
        showSideBar: !prevState.showSideBar
      }
    });
  }

  render (){
    return (<div>
      <Toolbar toggleSideBar = {this.toggleSideBar}/>
      <SideBar 
        showSidebar ={this.state.showSideBar} 
        toggleSideBar = {this.toggleSideBar}/>
      <main className={css.Content}>
      <BurgerPage/>
      </main>
      <div>
        Testing...        
      </div>
    </div>)
  }  
}

export default App;
