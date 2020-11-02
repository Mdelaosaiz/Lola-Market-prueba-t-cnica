import React from 'react';
import '../stylesheets/layout/App.scss';

class Header extends React.Component {

// renderMarket(){
//   for (let market of this.props.markets){
//     console.log(market.id);
//     // if(market.id === 50){
//     //   render(){
//     //    return 
//     //   }
//     // }
//   }
// }

render(){
     return (
       <div>
         <img alt=""></img>
         <div className="shop">
           <span>tienda</span>
           <small>20000</small>
          </div>
       </div>
     )
    }
  
}

export default Header;