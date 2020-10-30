import React from "react";
import Catalogue from "./Catalogue";
import {Route,Switch} from 'react-router-dom';
import '../stylesheets/layout/App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    token:"",
    markets: [],
    company_id: 50,  
    catalogue: [],
    category_id: 0,
    items: [],
    }
    this.getTokenFromApi();
    
    
  }
  getTokenFromApi() {
    fetch(
      `https://api.comprea.com/v7/user/session`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({token : data.token});
        this.getCategories(data.token);
      });  
  }
  getPostalCode(){      
      fetch (
          `https://api.comprea.com/v7/user/postalcode?token=${this.state.token}&postalcode=28010`
        )
        .then((response) => response.json())
        .then((data) => {
          this.setState({markets : data.markets});
        });  
        
  }    
  
  getCategories(token){
    fetch(
      `https://api.comprea.com/v7/company/categories?token=${token}&company_id=${this.state.company_id}`
    )
    .then((response) => response.json())
    .then((data) => {
      this.setState({catalogue : data.categories});
    });  
  }
  getItemsFromCategories(){
    fetch(
      `https://api.comprea.com/v7/company/items?token=${this.state.token}&company_id=${this.state.company_id}&category_id=${this.state.category_id}`
    )
    .then((response) => response.json())
    .then((data) => {
      this.setState({items : data.items});
    });  
  }
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path=''/>
        </Switch>  
        <header className="header">
        
        </header>
        <div>
         <Catalogue catalogue={this.state.catalogue} />
        </div>
      </div>
     );
  }

}
export default App;
