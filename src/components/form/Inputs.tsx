import { ReactNode } from "react";
import { Field } from "react-final-form";
import Error from "./Validation";

const Condition = ({
  when,
  is,
  children,
}: {
  when: string;
  is: string;
  children: ReactNode;
}) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => {
        return value === is ? children : null;
      }}
    </Field>
  );
};

export const required = (value: string | number) =>
  value ? undefined : "Required";

export function TextInput() {
  return (
    <div className="text-xl relative z-0 mb-6">
      <Field
        id="name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        name="name"
        component="input"
        type="text"
        validate={required}
      />
      <label
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="name"
      >
        Dish Name
      </label>
      <Error name="name" />
    </div>
  );
}
export function TimeInput() {
  return (
    <div className="text-xl relative mb-6">
      <Field
        id="preparation_time"
        name="preparation_time"
        component="input"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        type="time"
        step="1"
        validate={required}
      />
      <label
        htmlFor="preparation_time"
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Preparation Time
      </label>
      <Error name="preparation_time" />
    </div>
  );
}

export function DishTypeInput({ value }: { value: string }) {
  return (
    <div className="flex items-center mb-4">
      <Field
        id={`type_${value}`}
        name="type"
        component="input"
        type="radio"
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-400 border-gray-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 focus:ring-offset-2"
      ></Field>
      <label
        className="ml-3 text-sm font-medium text-gray-900"
        htmlFor={`type_${value}`}
      >
        {value}
      </label>
      <Error name="type" />
    </div>
  );
}

export function ConditionInputs() {
  return (
    <>
      <Condition when="type" is="pizza">
        <div>
          <label
            className="w-full h-2 text-gray-600 appearance-none cursor-pointer"
            htmlFor="no_of_slices"
          >
            Number of slices
          </label>
          <Field name="no_of_slices" validate={required}>
            {({ input: { value, onChange } }) => (
              <div className="flex items-center">
                <input
                  className="w-9/12 h-6 text-gray-600 cursor-pointer shrink-0"
                  type="range"
                  id="no_of_slices"
                  placeholder=" "
                  min="0"
                  required
                  max="10"
                  step="1"
                  value={value}
                  onChange={onChange}
                />
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {value}
                </span>
              </div>
            )}
          </Field>
          <Error name="no_of_slices" />
        </div>
        <div className="text-xl relative z-0 py-2">
          <Field
            id="diameter"
            name="diameter"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            component="input"
            type="number"
            placeholder=" "
            step="0.01"
            min="0"
            validate={required}
          />
          <label
            htmlFor="diameter"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Diameter
          </label>
          <Error name="diameter" />
        </div>
      </Condition>
      <Condition when="type" is="soup">
        <div>
          <label>
            Spiciness scale
            <Field name="spiciness_scale">
              {({ input: { value, onChange } }) => (
                <div className="flex items-center">
                  <input
                    className=" w-9/12 shrink-0 h-6 text-gray-600 cursor-pointer"
                    type="range"
                    id="spiciness_scale"
                    placeholder=" "
                    min="0"
                    max="10"
                    step="1"
                    value={value}
                    onChange={onChange}
                  />
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    {value}
                  </span>
                </div>
              )}
            </Field>
          </label>
          <Error name="no_of_slices" />
        </div>
      </Condition>
      <Condition when="type" is="sandwich">
        <div className="text-xl relative z-0 mb-6">
          <Field
            id="slices_of_bread"
            name="slices_of_bread"
            component="input"
            type="number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            subscription={{ value: true }}
            min="0"
            validate={required}
            step="1"
          />
          <label
            htmlFor="slices_of_bread"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slices of bread
          </label>
          <Error name="slices_of_bread" />
        </div>
      </Condition>
    </>
  );
}
