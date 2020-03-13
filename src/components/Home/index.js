import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions";

class Home extends Component {
  componentDidMount() {
    this.props.increment();
  }
  render() {
    console.log(this.props);
    return <div>home</div>;
  }
}

export default connect(
  state => ({ name: state.name }),
  dispatch => ({
    increment() {
      dispatch(fetchArticle());
    }
  })
)(Home);
