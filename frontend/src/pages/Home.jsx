import './Home.css';
import {Navbar} from "../components/Navbar.jsx";

/*function Outer(){
    let count=0;
    return(
        <h1>{++count}</h1>
    )
}*/
export function Home(){

    return(
        <div className="container1">
            <div className="item1"><Navbar /></div>
            <div className="item1">Sidebar</div>
            <div className="item1"><p>This is a text</p></div>
            <div className="item1">Footer</div>


        </div>

    )
}