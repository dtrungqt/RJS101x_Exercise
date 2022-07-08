import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends Component {
  //định nghĩa state được import từ DISHES
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // bây giờ, thông tin các món ăn dishes đã được nâng lên thành file App.js
      //ta có thể cung cấp những thông tin này tới menu component từ App.js thông qua props
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Restaurant</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
