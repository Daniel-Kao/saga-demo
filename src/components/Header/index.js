import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
      </div>
    );
  }
}

export default Header;
