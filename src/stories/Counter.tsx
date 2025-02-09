import React, { useState } from "react";
import { Button } from "./Button"; // Assuming the Button component is imported from Button.stories.tsx

interface CounterProps {
  label: string;
}

export const Counter = ({ label }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="counter-display mt-4">
        <p className="text-3xl">{count}</p>
      </div>
      <div className="button-container mt-4 flex gap-4">
        <Button label="Increment" onClick={increment} primary={true} />
        <Button label="Decrement" onClick={decrement} primary={false} />
        <Button label="Reset" onClick={reset} primary={false} />
      </div>
    </div>
  );
};
