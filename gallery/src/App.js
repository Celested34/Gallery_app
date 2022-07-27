
//Sources used for this project - Treehouse Unit 7 videos, Data Fetch in React, React Router 4 Basics

//Import the React library 
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//Import the css file
import './App.css';

//Import the components
import PhotoContainer from './components/PhotoContainer'
import Nav from './components/Nav';
import Search from './components/Search';

//Import the API
import apiKey from './config.js';


// App is the main component of the app
class App extends Component {

  state = {
    data: [],
    birds: [],
    dogs: [],
    cookies: []
  }

  //lifecycle method that is called after the component is rendered for the first time
  componentDidMount () {
    this.performSearch();
    this.birdsNavItemSearch();
    this.dogsNavItemSearch();
    this.cookiesNavItemSearch();
  }
 
  //Perform the search and update the state
  performSearch = (query = "cloud") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
            data: responseData.photos.photo,
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  //Search for birds 
  birdsNavItemSearch = (query = "birds") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          birds: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  //Search for dogs
  dogsNavItemSearch = (query = "dogs") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dogs: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  //Search for cookies
  cookiesNavItemSearch = (query = "cookies") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          cookies: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  //Render the app component and pass in the state
  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Search 
            onSearch = {this.performSearch}
        />
        <Nav />
     

      <Switch>
        <Route exact path="/" render={() => <PhotoContainer data={this.state.data}/>}/>   
        <Route path="/search" render={() => <Redirect to="/"/>}/>
        <Route path="/birds" render={() => <PhotoContainer data={this.state.birds}/>}/>
        <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs}/>}/>
        <Route path="/cookies" render={() => <PhotoContainer data={this.state.cookies}/>}/>
        <Route path="/:searchQuery" render={({match}) => <PhotoContainer data={this.state.data}/>}/>
        
      </Switch>
      </div>
     </BrowserRouter>
    )
  }
}

export default App;