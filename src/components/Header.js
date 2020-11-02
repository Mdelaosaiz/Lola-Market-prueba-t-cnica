import React from 'react';
import '../stylesheets/layout/App.scss';

class Header extends React.Component {

render(){
     return (
       <div className="headerIn">
         <img alt="icono de la tienda" src={this.props.market.icon}></img>
         <div className="shop">
           <span>{this.props.market.name}</span>
           <small> Comprando en {this.props.postalCode}</small>
          </div>
       </div>
     )
    }
  
}

export default Header;