import React from 'react';
import CategoryItem from './CategoryItem';
import Collapsible from 'react-collapsible';

class Category extends React.Component {
 
  renderCategoryItemArray(){
    const subCategory = this.props.category.categories.map(item => {
      return (<CategoryItem id = {item.id} name= {item.name} checked={item.checked}></CategoryItem>);
    });
    return subCategory;
  }


  render(){
    return (
    // <li /*className='catalogueListItem'*/ key= {this.props.category.id}> {this.props.category.name}
    <li key= {this.props.category.id}>
    <ul className="catalogueList">
    <Collapsible trigger={this.props.category.name}>
      <CategoryItem id = "-1" name= "Select all"></CategoryItem> 
      {this.renderCategoryItemArray()}
    </Collapsible>
    </ul>
    </li>
    
    );
  }
}
    
// 

export default Category;