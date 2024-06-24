import "./styles.css";
import { Component } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
class  App extends Component {
  // Write this code in Navbar.js file
    render() {
        return (

            <div className="App">
                <Navbar/>
                <Hero/>
                <About/>
            </div>
        )
    }
}
export default App;
  // Write this code in Hero.js file
  

  // Write this code in About.js file
  

  

