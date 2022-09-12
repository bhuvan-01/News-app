import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state={
    progress: 10
  }
  setProgress(progress){
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
         <LoadingBar
          height={3}
        color='#f11946'
       
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <NavBar/>
        <News pageSize={10}/>
      
      </div>
    )
  }
}
