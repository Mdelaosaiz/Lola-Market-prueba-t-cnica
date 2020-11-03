import React from 'react';
import '../stylesheets/layout/App.scss';

class Header extends React.Component {

 render(){
  const headerStyle = {
    //Recibimos el color del fondo de la tienda por props y la metemos en esta variable, para usarla en el return.
    backgroundColor: "rgb(" + this.props.market.color + ")"
  };
     return (
       <div className="headerIn" style = {headerStyle} >
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