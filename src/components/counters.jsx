import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleDecrement = (counterId) => {
    const newCounters = counters.filter((el) => {
      if (el.id === counterId) {
        el.value -= 1;
        return el;
      }
      return el;
    });
    setCounters(newCounters);
  };
  const handleIncrement = (counterId) => {
    const newCounters = counters.filter((el) => {
      if (el.id === counterId) {
        el.value += 1;
        return el;
      }
      return el;
    });
    setCounters(newCounters);
  };
  const handleReset = () => setCounters(initialState);
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          {...counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
