import React from 'react';
import '../stylesheets/layout/App.scss';
import {Link} from 'react-router-dom';
import checked from '../images/ic_checked.svg';

class CategoryItem extends React.Component{

  renderCheck(){
     if (this.props.item.checked === true){
       return(<img className="checked" src={checked} alt="check"></img>);
     }
  }

  render(){
    
    return (
      // En este link se crea la ruta que se va a escribir el a URL: tienda/market/categoria/subcategoria.
      <Link to= {`/tienda/${this.props.marketid}/${this.props.categoryid}/${this.props.item.id}`}>
        <li className='categoryListItem' key = {this.props.item.id}>
          <img className="item-icon" src = {this.props.item.icon} alt="icono del producto"></img> 
          {this.props.item.name} {this.renderCheck()} 
        </li>
      </Link>
    )
  }
} 

export default CategoryItem;