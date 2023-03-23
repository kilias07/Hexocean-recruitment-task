import { Config } from "final-form";
import { Form } from "react-final-form";
import { Dish } from "../types";
import {
  TextInput,
  DishTypeInput,
  ConditionInputs,
  TimeInput,
} from "./form/Inputs";
import { sendDish } from "./postFunction";

const onSubmit: Config<Dish, { name: string }>["onSubmit"] = async (
  values,
  form
) => {
  const errors = {} as { [keyof: string]: string };

  if (!values.name || !values.preparation_time) {
    errors.name = "Required";
    errors.preparation_time = "Required";
    return errors;
  }

  let filteredValues = {};
  if (values.type === "pizza") {
    const { spiciness_scale, slices_of_bread, ...valuesRest } = values;
    filteredValues = valuesRest;
  }
  if (values.type === "soup") {
    const { no_of_slices, diameter, slices_of_bread, ...valuesRest } = values;
    filteredValues = valuesRest;
  }
  if (values.type === "sandwich") {
    const { no_of_slices, diameter, spiciness_scale, ...valuesRest } = values;
    filteredValues = valuesRest;
  }

  try {
    const res = await sendDish(filteredValues as Dish);
    res && alert("Dish added successfully");
    form.reset();
  } catch (e) {
    alert("Something went wrong");
    console.log(e);
  }
};

function MyForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, form, submitting }) => (
        <form onSubmit={handleSubmit} className="w-64 h-[34rem]">
          <div className="h-[30rem]">
            <TextInput />
            <TimeInput />
            <div>
              <p className="mb-2">Dish type</p>
              <DishTypeInput value="pizza" />
              <DishTypeInput value="soup" />
              <DishTypeInput value="sandwich" />
            </div>
            <ConditionInputs />
          </div>
          <div className="buttons flex justify-around">
            <button
              type="submit"
              disabled={submitting}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Submit
            </button>
            <button
              className="
            py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
              type="button"
              onClick={() => form.reset()}
              disabled={submitting}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </Form>
  );
}
export default MyForm;
