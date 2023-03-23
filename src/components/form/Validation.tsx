import { Field } from "react-final-form";

const Error = ({ name }: { name: string }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
);
export default Error;
