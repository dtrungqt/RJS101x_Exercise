import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  // if (dish != null) {
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
  // } else {
  //   return <div></div>;
  // }
}

function RenderComments({ comments }) {
  // if (comments != null) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                --{comment.author}, {dateFormat(comment.date, "dd/mm/yyyy")}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
  // } else {
  //   return <div></div>;
  // }
}
//method hiển thị thông tin món ăn và các bình luận của món ăn đã được chọn
const DishDetail = (props) => {
  /*
  // Cách 1
  const dish = props.dish;
  if (dish != null) {
    */

  // Cách 2
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          {/* Cách 1 */}
          {/* <RenderDish dish={dish} />
          <RenderComments comments={dish.comments} /> */}

          {/* Cách 2 */}
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

//4. export component  từ file này, để có thể import component này ở bất cứ nơi nào trong ứng dụng
export default DishDetail;
