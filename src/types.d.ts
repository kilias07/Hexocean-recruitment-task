export interface Dish {
  id: number;
  name: string;
  preparation_time: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  type: "soup" | "pizza" | "sandwich";
  slices_of_bread?: number;
}
