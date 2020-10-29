import React from 'react';
//import CategoryItem from './CategoryItem';
import Category from './Category'
//import Collapsible from 'react-collapsible';


class Catalogue extends React.Component {
 
  // renderCategoryArray(){
  //   const catalogueItem = this.props.catalogue.map(item =>{
  //     return (
  //       <li /*className='catalogueListItem'*/ key= {item.id}> {item.name}
  //       <ul>
  //        <Collapsible trigger="">
  //         {this.renderSubCategory(item)}
  //        </Collapsible>
  //       </ul>
  //       </li>
  //     );
  //   });
  //   return catalogueItem
  // }

  // renderSubCategory(cat){
  //   const subCategory = cat.categories.map(item => {
  //     return (<CategoryItem id = {item.id} name= {item.name}></CategoryItem>);
  //    // return (<li /*className='catalogueListItem'*/ key= {item.id} >{item.name}</li>);
  //   })
  //   return subCategory;
  // }

  renderCategoryArray(){
    const catalogueItem = this.props.catalogue.map(item =>{
      return (
          <Category category={item}></Category>
      );
    });
    return catalogueItem
  }
  render(){
    return <ul className="catalogueList">{this.renderCategoryArray()}</ul>
  }
}
    
// 

export default Catalogue;