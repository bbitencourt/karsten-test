export type Order = "desc" | "asc";

export const orderArray = (array: number[], order: Order) => {
  const isArray = Array.isArray(array);
  if (!isArray) return false;
  if (!order) return false;

  let done: boolean = false;

  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (order === "desc") {
        if (array[i - 1] < array[i]) {
          done = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }

      if (order === "asc") {
        if (array[i - 1] > array[i]) {
          done = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  }

  console.log(array);
  return array;
};
