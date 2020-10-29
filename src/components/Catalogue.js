import React from 'react';
import CategoryItem from './CategoryItem';


class Catalogue extends React.Component {
 
  renderCategoryArray(){
    const catalogueItem = this.props.catalogue.map(item =>{
      return (
        <li /*className='catalogueListItem'*/ key= {item.id}> {item.name}
        <ul>

          {this.renderSubCategory(item)}
        </ul>
        </li>
      );
    });
    return catalogueItem
  }

  renderSubCategory(cat){
    const subCategory = cat.categories.map(item => {
      return (<CategoryItem id = {item.id} name= {item.name}></CategoryItem>);
     // return (<li /*className='catalogueListItem'*/ key= {item.id} >{item.name}</li>);
    })
    return subCategory;
  }
  render(){
    return <ul className="catalogueList">{this.renderCategoryArray()}</ul>
  }
}
    
// 

export default Catalogue;