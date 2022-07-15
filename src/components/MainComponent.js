import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  //định nghĩa state được import từ DISHES
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    //tạo functional component
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
      );
    };

    //tạo function component
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        {/* Hiển thị Navbar  */}
        <Header />

        {/* Router  */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          {/* Sử dụng exact có nghĩa là path phải khớp chính xác với path sau đó (ở
          đây là /menu). Bởi vì ta định tuyến (route) đến DishDetail Component
          và sử dụng một đường dẫn bắt đầu bằng /menu */}

          {/* Đặt đường dẫn mặc định */}
          {/* nếu route không khớp với bất kỳ tuyến nào:
          /home nay /menu thì sẽ chuyển hướng tới /home */}
          <Redirect to="/home" />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
