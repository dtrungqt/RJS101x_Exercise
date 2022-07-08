//1. import Component từ React
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

//2. tạo 1 Component mới dưới dạng class
class DishDetail extends Component {
  //định nghĩa constructor cho component, nhận 1 tham số gọi là props
  //đây là điều bắt buộc khi định nghĩa 1 class component
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    --{comment.author}, {comment.date}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  //method hiển thị thông tin món ăn và các bình luận của món ăn đã được chọn
  render() {
    const dish = this.props.selectedDish;
    if (dish != null) {
      return (
        <div className="row">
          {this.renderDish(dish)}
          {this.renderComments(dish.comments)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

//4. export component  từ file này, để có thể import component này ở bất cứ nơi nào trong ứng dụng
export default DishDetail;
