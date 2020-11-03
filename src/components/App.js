import React from "react";
import Header from "./Header";
import Catalogue from "./Catalogue";
import {Route,Switch,Redirect} from 'react-router-dom';
import '../stylesheets/layout/App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    token:"",
    postalCode: 28010,
    markets: [],
    market: {name: "tienda"},
    company_id: 50,  
    catalogue: [],
    category_id: 0,
    items: [],
    }
  }

  //Obligamos al token a estar listo cuando se monte el componente.
  componentDidMount(){
    this.getTokenFromApi();//TODO
  }
  
  //Función con la que se consigue el Token.
  getTokenFromApi(pepe) {
    fetch(
      `https://api.comprea.com/v7/user/session`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({token : data.token});
        this.getCategories(data.token);
        this.getPostalCode(data.token)
        //pepe(data.token);
      });  
  }

  //función con la que se consigue la lista de las tiendas (Markets)
  getPostalCode(token){    

      fetch (
          `https://api.comprea.com/user/postalcode?token=${token}&postalcode=${this.state.postalCode}`
        )
        .then((response) => response.json())
        .then((data) => {
          this.setState({markets : data.markets});
        
          //En el siguiente for lo que se consigue es que 
        for(let mrkt of data.markets){
          if (mrkt.id == this.state.company_id){
          this.setState( {market: mrkt});
        }
   }
        });       
  }    
  
  //función con la que se consigue las categorías de cada tienda.
  getCategories(token){  
    
    fetch(
      `https://api.comprea.com/v7/company/categories?token=${token}&company_id=${this.state.company_id}`
    )
    .then((response) => response.json())
    .then((data) => {
      this.setState({catalogue : data.categories});
    });  
  }

  //función con la que se consigue las subcategorías de cada tienda.
  getItemsFromCategories(){
    fetch(
      `https://api.comprea.com/v7/company/items?token=${this.state.token}&company_id=${this.state.company_id}&category_id=${this.state.category_id}`
    )
    .then((response) => response.json())
    .then((data) => {
      this.setState({items : data.items});
    });  
  }
  

  renderCatalogue = (props) => {


    return(
      <div>
          <Header 
           market = {this.state.market}
           postalCode = {this.state.postalCode}
           >           
          </Header>
        <div className="catalogue">
          <Catalogue 
           catalogue = {this.state.catalogue} 
           marketId = {props.match.params.marketid} 
           categoryid = {props.match.params.category} 
           subcategoryid = {props.match.params.subcategory}
          />
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
        </Switch>  
      </div>
     );
  }

}
export default App;
