import "./styles.css";
import { Component } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
// Use Hero, Skills and About component to display your information
class App extends Component {
    constructor() {
        super();
        this.state = {
            count:1,
            favorite: "Car",
            vehicles: ["Car","Bus","MotorCycle"]
        }
    }
    changeFavorite = () => {
        this.setState(prevState => (count:prevState.count + 1));
    }
  render() {
    return (

          <div className="container">
        <Hero />
          <Skills />
        <About />
      </div>

    )}
}
export default App