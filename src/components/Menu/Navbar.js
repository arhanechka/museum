import React from "react";
import classes from "./Navbar.css";
// import logo from "./logo1.jpg";
import NavigationItem from './NavigationItem/NavigationItem'

const menu = ["Home", "Photo", "Video", "Information"]

const navbar = () => {
  console.log(menu.indexOf("Home"))
    return (
      <div>
        <div className={classes.container}>
          <div align="left">
            {/* <img src={logo} alt="" width="130" /> */}
          </div>
          <nav>
            <ul> 
            {menu.map(el => (
              <NavigationItem key={menu.indexOf(el)} text={el}/>))}
            </ul>
          </nav>
        </div>
        <hr />
      </div>
    );
  }

export default navbar;