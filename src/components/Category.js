import React from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import '../stylesheets/layout/App.scss';

import eye from '../images/eye.png';

class Category extends React.Component {
 
  renderCategoryItemArray(){
    const subCategory = this.props.category.categories.map(item => {
      return (
      <CategoryItem 
        key={item.id} 
        item = {item} 
        marketid={this.props.marketid} 
        categoryid={this.props.category.id} 
        selectedSubCategory={this.props.selectedSubCategory}>
      </CategoryItem>);
    });
    return subCategory;
  }
  
  render(){
    //colapsable.
    const selectAll = {id:-1, name:"Ver todo", icon: eye}; 
    let open = false;

    // Aquí ordenamos al colapsable a que, cuando esté seleccionado y tenga el mismo id que la categoría, se abra.
    if (this.props.selectedCategory != null && this.props.category.id == this.props.selectedCategory)
    {open = true;
      if (this.props.selectedSubCategory != null && this.props.selectedSubCategory == -1){
        //Cuando el colapsable esté seleccionado, vamos a poner un check en cada uno de los items si no está seleccionado.
        for (let item of this.props.category.categories){
          if ( item.checked == null || item.checked === false){
            item.checked = true;
            //si hay algún item que está en true, va a seguir en igual si se selecciona "ver todo".
          } else if(item.checked != null || item.checked === true){
            item.checked = true;

          }else { item.checked = false}
        }
      } else if (this.props.selectedSubCategory == null && this.props.selectedSubCategory == -1){
        for (let item of this.props.category.categories){
          if ( item.checked != null || item.checked === true){
            item.checked = false;}
        } 
      } 
    }

    return (
   
    <li className="category" key= {this.props.category.id}>

    {/* En este link se crea la ruta que se va a escribir el a URL: tienda/market/categoria */}

      <Link to={`/tienda/${this.props.marketid}/${this.props.category.id}`}>
        <div>
         <img className="icon" src= {this.props.icon} alt="icono del producto"></img>
         {this.props.category.name}
        </div>
      </Link>
      <ul className="categoryList">
        <Collapsible className="collapsible" open={open} >
          <CategoryItem 
           key={selectAll.id} 
           item = {selectAll} 
           marketid={this.props.marketid} 
           categoryid={this.props.category.id} 
           selectedSubCategory={this.props.selectedSubCategory}>
          </CategoryItem>
          {this.renderCategoryItemArray()}
        </Collapsible>
      </ul>
    </li>
     
    );
  }
}

export default Category;