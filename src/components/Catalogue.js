import React from 'react';
import Category from './Category'

class Catalogue extends React.Component {
 
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

export default Catalogue;