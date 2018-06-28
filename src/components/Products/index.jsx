import React from "react";
import { Table } from "react-materialize";
import ProductsItem from "../ProductsItem";
import { connect } from "react-redux";
import { getProd, postProd, delProd } from "../../actions/products";
import { Row, Col, Input, Card, Button } from "react-materialize";

class Products extends React.Component {
  componentDidMount = () => {
    this.props.loadProd();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProd({
      endpoint: "products",
      title: this.inputTitle.value,
      price: this.inputPrice.value
    });
    this.inputTitle.value = "";
    this.inputPrice.value = "";
  };

  render() {
    return (
      <div className="container">
        <Card>
          <Row>
            Add products
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    ref={title => {
                      this.inputTitle = title;
                    }}
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="icon_prefix">Title</label>
                </div>
                <div className="input-field col s6">
                  <input
                    ref={price => {
                      this.inputPrice = price;
                    }}
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="icon_telephone">Price</label>
                </div>
              </div>
              <Button type="submit" waves="light">
                add
              </Button>
            </form>
          </Row>
        </Card>
        <Card>
          <Table>
            <thead>
              <tr>
                <th data-field="id">id</th>
                <th data-field="name">Name</th>
                <th data-field="price">Price</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {this.props.products.map(item => (
                <ProductsItem
                  key={item._id}
                  {...item}
                  rmProd={this.props.rmProd}
                />
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

const mstp = state => ({
  products: state.products
});

const mdtp = dispatch => ({
  loadProd: () => {
    dispatch(getProd());
  },
  createProd: prod => {
    dispatch(postProd(prod));
  },
  rmProd: queryObj => {
    dispatch(delProd(queryObj));
  }
});

export default connect(
  mstp,
  mdtp
)(Products);
