import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticle, increment } from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }
  componentDidMount() {
    this.props.fetchArticle();
  }
  increment() {
    this.props.increment();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="number">{this.props.article.title}</div>
        <div>{this.props.count}</div>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default connect(
  state => ({ article: state.article, count: state.count }),
  dispatch => ({
    fetchArticle() {
      dispatch(fetchArticle());
    },
    increment() {
      dispatch(increment());
    }
  })
)(Home);
