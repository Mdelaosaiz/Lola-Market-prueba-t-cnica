import React from 'react';
import CategoryItem from './CategoryItem';
import Collapsible from 'react-collapsible';
import '../stylesheets/layout/App.scss';

import eye from '../images/eye.png';

class Category extends React.Component {
 
  constructor(props){
    super(props);
    this.onCategoryItemChange = this.onCategoryItemChange.bind(this);
  }

  renderCategoryItemArray(){
    const subCategory = this.props.category.categories.map(item => {
      return (<CategoryItem key={item.id} item = {item} onChange= {this.onCategoryItemChange}></CategoryItem>);
    });
    return subCategory;
  }
  //con esta función se notifica al padre qué cambios ha habido y se usa como parámetro lo que ha cambiado del hijo. 
  onCategoryItemChange(id, checked){
    this.props.onChange();
  }

  render(){

    const selectAll = {id:-1, name:"Ver todo", icon: eye}; //TODO

    return (
    <li className="category" key= {this.props.category.id}>
      <img className="icon" src= {this.props.icon} alt="icono del producto"></img>
      <ul className="categoryList">
        <Collapsible className="collapsible" trigger={this.props.category.name}>
          <CategoryItem key={selectAll.id} item = {selectAll} onChange = {this.onCategoryItemChange}>
          </CategoryItem>
          {this.renderCategoryItemArray()}
        </Collapsible>
      </ul>
    </li>
    
    );
  }
}

export default Category;