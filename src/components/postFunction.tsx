import { Dish } from "../types";

export async function sendDish<T>(dish: Dish): Promise<T> {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dish),
  };
  const response = await fetch(
    "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
    settings
  );

  return await response.json();
}
