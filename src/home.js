import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import Nav from './nav';
import Blog from './blog';
import Curiosity from './curiosity';

class Home extends Component {
  render(){
  return (
    <div className="App">
      <div className='head'>
        <h1>TourCity</h1>
        </div>
        <div className='menu'>
        <Router>
            <Switch>
            <Nav/>
            <Route path="/home" component={Home}>Home</Route>
            <Route path="/blog" component={Blog}>Blog</Route>
            <Route path="/curiosity" component={Curiosity}>Curiosity</Route>
            </Switch>
            </Router>
         </div>
        <div className='content'>
          <img src='https://i.pinimg.com/originals/5d/97/b8/5d97b8478ab7fefd6af1b85225640e6d.jpg' alt='' width='100%' height='600px'/>
          </div>
    </div>
  );}
};

export default Home;