import React, { useCallback, useEffect } from "react";
import {
  removeObjectProperty,
  orderArray,
  Order,
  processAfterWait,
} from "utils";

const App = () => {
  const handleTest1 = useCallback(() => {
    const user = {
      id: 12346,
      first_name: "Bruno",
      last_name: "Bitencourt",
      age: "40",
    };
    removeObjectProperty(user, "age");
  }, []);

  const handleTest2 = useCallback((order: Order) => {
    const numbers: number[] = [5, 2, 1, 0, 9, 8, 7, 6, 4];
    orderArray(numbers, order);
  }, []);

  const handleTest3 = useCallback(() => {
    processAfterWait();
  }, []);

  useEffect(() => {
    handleTest1();
  }, [handleTest1]);

  return (
    <main>
      <section>
        <h1>Test#1</h1>
        <p>
          {`{ id: 12346, first_name: "Bruno", last_name: "Bitencourt", age: "40" }`}
        </p>
        <button type="button" onClick={handleTest1}>
          Remove "age"
        </button>
      </section>
      <section>
        <h1>Test#2</h1>
        <p>{`[5, 2, 1, 0, 9, 8, 7, 6, 4]`}</p>
        <button type="button" onClick={() => handleTest2("asc")}>
          Order by ASC
        </button>
        <button type="button" onClick={() => handleTest2("desc")}>
          Order by DESC
        </button>
      </section>
      <section>
        <h1>Test#3</h1>
        <button type="button" onClick={handleTest3}>
          Execute
        </button>
      </section>
    </main>
  );
};

export default App;
