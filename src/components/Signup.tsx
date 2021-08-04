import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

type valueForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Signup: React.FC = () => {
  const initialValues: valueForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validate = Yup.object({
    fullName: Yup.string()
      .max(30, "Must be 30 character or less")
      .required("name is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), "Password is not mach"])
      .required("Confirm password is required"),
  });

  return (
    <div>
      <h1 className="my-4 font-weight-bold-display-4"> Sign Up</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(value) => console.log(value)}
        validationSchema={validate}
      >
        <Form>
          <TextField label="Full Name" name="fullName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <div className="row g-2 mt-3">
            <button type="submit" className="col-5 m-2 btn btn-primary">
              Submit
            </button>
            <button type="reset" className="col-5 m-2 btn btn-danger">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
