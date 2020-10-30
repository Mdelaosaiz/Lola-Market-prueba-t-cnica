import React from 'react';
import Category from './Category'
import '../stylesheets/layout/App.scss';

class Catalogue extends React.Component {
 
  renderCategoryArray(){
    const catalogueItem = this.props.catalogue.map(item =>{
      return (
          <Category category={item} icon= {item.icon}></Category>
      );
    });
    return catalogueItem
  }
  render(){
    return <ul className="catalogueList">{this.renderCategoryArray()}</ul>
  }
}

export default Catalogue;