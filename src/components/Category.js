import React from 'react';
import CategoryItem from './CategoryItem';
import Collapsible from 'react-collapsible';
import '../stylesheets/layout/App.scss';

class Category extends React.Component {
 
  renderCategoryItemArray(){
    const subCategory = this.props.category.categories.map(item => {
      return (<CategoryItem id = {item.id} name= {item.name} icon= {item.icon} checked={item.checked}></CategoryItem>);
    });
    return subCategory;
  }


  render(){
    return (
    <li className="category" key= {this.props.category.id}>
      <img className="icon" src= {this.props.icon} alt="icono del producto"></img>
      <ul className="categoryList">
        <Collapsible className="collapsible" trigger={this.props.category.name}>
        <CategoryItem id = "-1" name= "Select all"> 
          <img className="icon" src= {this.props.icon} alt="icono del producto"></img>
        </CategoryItem> 
          {this.renderCategoryItemArray()}
         </Collapsible>
      </ul>
    </li>
    
    );
  }
}

export default Category;