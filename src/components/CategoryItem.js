import React from 'react';
import '../stylesheets/layout/App.scss';
import {Link} from 'react-router-dom';
import checked from '../images/ic_checked.svg';

class CategoryItem extends React.Component{

constructor(props){
  super(props);
  this.onClick = this.onClick.bind(this);
}

  renderCheck(){
     if (this.props.item.checked === true){
       return(<img className="checked" src={checked} alt="check"></img>);
     }
  }
  
  onClick(){ 
  //   if ( this.props.item.checked === null || this.props.item.checked === false){
  //     this.props.item.checked = true;
  //   } else{ this.props.item.checked = false}
  
  //   // se hace  un lifting al padre en el que se avisa qué item ha cambiado y qué ha cambiado.
  // this.props.onChange(this.props.item.id, this.props.item.checked);
}

  render(){
    // console.log(this.props.item.id);
    // console.log(this.props.selectedSubCategory);
    if (this.props.selectedSubCategory != null && this.props.item.id == this.props.selectedSubCategory){
      if ( this.props.item.checked == null || this.props.item.checked === false){
        this.props.item.checked = true;
      } else{ this.props.item.checked = false}
    }

    return(
      <Link to={`/tienda/${this.props.marketid}/${this.props.categoryid}/${this.props.item.id}`}>
      <li className='categoryListItem' key= {this.props.item.id} onClick={this.onClick}>
        <img className="item-icon" src= {this.props.item.icon} alt="icono del producto"></img> 
        {this.props.item.name} {this.renderCheck()} </li>
      </Link>
    )
  }
} 

export default CategoryItem;