import React from "react";
import { ErrorMessage, useField } from "formik";

interface TextFieldProps {
  name: string;
  type: string;
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(field, meta);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} className={`form-label`}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        autoComplete="off"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="invalid-feedback"
      />
    </div>
  );
};
