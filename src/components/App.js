import React from "react";
import Catalogue from "./Catalogue";
import {Route,Switch,Redirect} from 'react-router-dom';
import '../stylesheets/layout/App.scss';


 
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    token:"",
    markets: [],
    selectedMarket : {},
    company_id: 50,  
    catalogue: [],
    category_id: 0,
    items: [],
    }

    this.onCatalogueChange = this.onCatalogueChange.bind(this);
    this.renderCatalogue = this.renderCatalogue.bind(this);
  }

  componentDidMount(){
    this.getTokenFromApi();
    //this.getTokenFromApi(getPostalCode);
    //this.getTokenFromApi(getCategories);
  }
  
  getTokenFromApi(pepe) {
    fetch(
      `https://api.comprea.com/v7/user/session`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({token : data.token});
        this.getCategories(data.token);
        //pepe(data.token);
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
   
  onCatalogueChange (catalogueProps){
    this.setState({catalogue : catalogueProps});
  }

  renderCatalogue = (props) => {

    //this.setSate({company_id:props.match.params.marketid});
    //console.log(props.match.params.marketid);
    //this.getTokenFromApi();
    return(
      <div>
        <div className="header">
          <img alt=""></img>
          <div className="shop">
           <span>tienda</span>
           <small>20000</small>
          </div>
        </div>
        <div className="catalogue">
         <Catalogue catalogue={this.state.catalogue} onChange = {this.onCatalogueChange} marketId = {props.match.params.marketid} categoryid = {props.match.params.category} subcategoryid = {props.match.params.subcategory}/>
        </div>
      </div>);
  }
  
  render(){
    return (
      <div className="App">
        <Redirect
            from="/"
            to="/tienda/50" />
        <Switch>   
          <Route exact path='/tienda/:marketid' render={this.renderCatalogue}>
          </Route>    
           <Route exact path='/tienda/:marketid/:category' render={this.renderCatalogue}>
          </Route>
          <Route exact path='/tienda/:marketid/:category/:subcategory' render={this.renderCatalogue}>
          </Route>
          {/* <Route path='/tienda/:marketid'>
            <div className="header">
              <img alt=""></img>
              <div className="shop">
               <span>tienda</span>
               <small>20000</small>
              </div>
            </div>
            <div className="catalogue">
             <Catalogue catalogue={this.state.catalogue} onChange = {this.onCatalogueChange}/>
            </div>
          </Route> */}
        </Switch>  
      </div>
     );
  }

}
export default App;
