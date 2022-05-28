import React, { Component} from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';





class App extends Component {
  
  render() {
    
    return (
      
      <div className="App">
  
        <Nav />
            <Main />
        <Footer />
  
        
      </div>
    )
  }

}

export default App;
