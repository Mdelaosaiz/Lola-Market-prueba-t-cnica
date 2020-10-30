import React from 'react';
import '../stylesheets/layout/_products.scss';

class CategoryItem extends React.Component{
  render(){
    return(
      <li /*className='catalogueListItem'*/ key= {this.props.id} >
        <img className="icon" src= {this.props.icon} alt="icono del producto"></img> 
        {this.props.name}</li>
    )
  }
} 

export default CategoryItem;