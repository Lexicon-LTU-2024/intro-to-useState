import { FormEventHandler } from "react";
import "./App.css";

export function App() {
  // ########## No useState, vanilla JS ##############################
  let value = 8;

  const handleOnDecrement = (): void => {
    const p = document.querySelector<HTMLParagraphElement>(".value")!;

    value -= 1;
    console.log(value);

    // Above is equal to:
    // value = value - 1

    // The value is updated but nothing happens in the DOM. React doesn't react on this change.
    // To fix this we need to manipulate the DOM manually.
    p.innerText = value.toString();
  };

  const handleOnIncrement = (): void => {
    const p = document.querySelector<HTMLParagraphElement>(".value")!;

    value += 1;
    console.log(value);
    p.innerText = value.toString();
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    const input = document.querySelector<HTMLInputElement>(".input")!;
    const p = document.querySelector<HTMLParagraphElement>(".value")!;

    e.preventDefault();
    value = parseInt(input.value);
    console.log(input.value);
    p.innerText = input.value;
  };

  return (
    <>
      <div className="actions">
        <button className="btn" onClick={handleOnDecrement}>
          -
        </button>
        <p className="value">{value}</p>
        <button className="btn" onClick={handleOnIncrement}>
          +
        </button>
      </div>
      <form className="form" onSubmit={handleOnSubmit}>
        <input type="number" className="input" />
        <button type="submit">Set fixed number</button>
      </form>
    </>
  );
}
