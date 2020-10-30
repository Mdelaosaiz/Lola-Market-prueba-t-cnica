import React from 'react';
import '../stylesheets/layout/App.scss';

class CategoryItem extends React.Component{
  render(){
    return(
      <li className='categoryListItem' key= {this.props.id} >
        <img className="item-icon" src= {this.props.icon} alt="icono del producto"></img> 
        {this.props.name}</li>
    )
  }
} 

export default CategoryItem;