import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomError } from "../../styled-components";
import { connect } from "react-redux";
import { loginRequest } from "../../actions";

const Login = ({ login }) => {
  return (
    <Formik
      initialValues={{ firstName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        login(values.firstName);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" component={CustomError} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default connect(null, dispatch => ({
  login(name) {
    dispatch(loginRequest(name));
  }
}))(Login);
