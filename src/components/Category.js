import React from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';
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
      return (<CategoryItem key={item.id} item = {item} onChange= {this.onCategoryItemChange} marketid={this.props.marketid} categoryid={this.props.category.id} selectedSubCategory={this.props.selectedSubCategory}></CategoryItem>);
    });
    return subCategory;
  }
  //con esta función se notifica al padre qué cambios ha habido y se usa como parámetro lo que ha cambiado del hijo. 
  onCategoryItemChange(id, checked){
    this.props.onChange();
  }

  render(){

    const selectAll = {id:-1, name:"Ver todo", icon: eye}; 
    let open = false;
    if (this.props.selectedCategory != null && this.props.category.id == this.props.selectedCategory)
    {open = true;
      if (this.props.selectedSubCategory != null && this.props.selectedSubCategory == -1){
        for (let item of this.props.category.categories)
        {
          if ( item.checked == null || item.checked === false){
            item.checked = true;
          } else{ item.checked = false}
        }
      }
    }

    return (
   
    <li className="category" key= {this.props.category.id}>
      <Link to={`/tienda/${this.props.marketid}/${this.props.category.id}`}>
      <div>
      <img className="icon" src= {this.props.icon} alt="icono del producto"></img>
      {this.props.category.name}
      </div>
      </Link>
      <ul className="categoryList">
        <Collapsible className="collapsible" open={open} >
          <CategoryItem key={selectAll.id} item = {selectAll} onChange = {this.onCategoryItemChange} marketid={this.props.marketid} categoryid={this.props.category.id} selectedSubCategory={this.props.selectedSubCategory}>
          </CategoryItem>
          {this.renderCategoryItemArray()}
        </Collapsible>
      </ul>
    </li>
     
    );
  }
}

export default Category;