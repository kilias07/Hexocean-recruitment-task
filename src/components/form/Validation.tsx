import { Field } from "react-final-form";

const Error = ({ name }: { name: string }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? (
        <span className="text-xs relative -top-1 text-red-700">{error}</span>
      ) : null
    }
  </Field>
);
export default Error;
