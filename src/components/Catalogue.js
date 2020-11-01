import React from 'react';
import Category from './Category'
import '../stylesheets/layout/App.scss';

class Catalogue extends React.Component {

  constructor(props){
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
  }

 onChangeCategory(){
   this.props.onChange(this.props.catalogue);
 }

  renderCategoryArray(){
    const catalogueItem = this.props.catalogue.map(item =>{
      return (
        
          <Category key={item.id} category={item} icon= {item.icon} onChange ={this.onChangeCategory} marketid={this.props.marketId} selectedCategory={this.props.categoryid} selectedSubCategory={this.props.subcategoryid}></Category>
       
      );
    });
    return catalogueItem
  }
  render(){
    return <ul className="catalogueList">{this.renderCategoryArray()}</ul>
  }
}

export default Catalogue;