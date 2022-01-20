import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render(){
     
    return (
        <Nav>
            <ul>
           <Link to="/home"><li> Home</li></Link>
           <Link to="/blog"><li>Blog</li></Link>
           <Link to="/curiosity"><li>Curiosity</li></Link>
          </ul>
        </Nav>
           
          

    );}
}
export default Nav;