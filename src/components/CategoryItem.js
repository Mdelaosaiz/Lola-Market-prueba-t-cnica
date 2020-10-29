import React from 'react';
import '../stylesheets/layout/_products.scss';

class CategoryItem extends React.Component{
  render(){
    return(
      <li /*className='catalogueListItem'*/ key= {this.props.id} >{this.props.name}</li>
    )
  }
} 

export default CategoryItem;