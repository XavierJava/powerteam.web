import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <ul className="nav nav-sidebar" id="childNode" style={{display:'block'}}>
            <li className="active"><a href="index.html">Overview <span className="sr-only">(current)</span></a></li>
            <li><a href="">Project</a></li>
            <li><a href="Delivery.html">Delivery</a></li>
            <li><a href="">Documentations</a></li>
            <li><a href="">Support</a></li>
	        <li><a href="">Support</a></li>
          </ul>
        );
      }
}

export default Sidebar;