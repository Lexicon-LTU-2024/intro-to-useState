import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import "./App.css";

export function App() {
  // ########## No useState, vanilla JS ##############################

  // let value = 8;
  // const handleOnDecrement = (): void => {
  //   const p = document.querySelector<HTMLParagraphElement>(".value")!;
  //   value -= 1;
  //   console.log(value);
  //   // Above is equal to:
  //   // value = value - 1
  //   // The value is updated but nothing happens in the DOM. React doesn't react on this change.
  //   // To fix this we need to manipulate the DOM manually.
  //   p.innerText = value.toString();
  // };
  // const handleOnIncrement = (): void => {
  //   const p = document.querySelector<HTMLParagraphElement>(".value")!;
  //   value += 1;
  //   console.log(value);
  //   p.innerText = value.toString();
  // };
  // const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   const input = document.querySelector<HTMLInputElement>(".input")!;
  //   const p = document.querySelector<HTMLParagraphElement>(".value")!;
  //   e.preventDefault();
  //   value = parseInt(input.value);
  //   console.log(input.value);
  //   p.innerText = input.value;
  // };
  // return (
  //   <>
  //     <div className="actions">
  //       <button className="btn" onClick={handleOnDecrement}>
  //         -
  //       </button>
  //       <p className="value">{value}</p>
  //       <button className="btn" onClick={handleOnIncrement}>
  //         +
  //       </button>
  //     </div>
  //     <form className="form" onSubmit={handleOnSubmit}>
  //       <input type="number" className="input" />
  //       <button type="submit">Set fixed number</button>
  //     </form>
  //   </>
  // );

  // ########## No useState, but with useRef ##############################

  // let value = 0;

  // // The initial value of the variable is put inside the parenthesis.
  // const p = useRef<HTMLParagraphElement>(null);
  // const input = useRef<HTMLInputElement>(null);

  // const handleOnDecrement = () => {
  //   value -= 1;
  //   console.log(value);

  //   // p is just a container to the actual element. It's a reference to the actual data. To access the element or data  we need to acces the "current" attribute.
  //   p.current!.innerText = value.toString();
  // };

  // const handleOnIncrement = () => {
  //   value += 1;
  //   console.log(value);
  //   p.current!.innerText = value.toString();
  // };

  // const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   const inputValue = parseInt(input.current!.value);
  //   console.log(p.current);
  //   console.log(input.current);
  //   value = inputValue;
  //   p.current!.innerText = inputValue.toString();
  // };

  // return (
  //   <>
  //     <div className="actions">
  //       <button className="btn" onClick={handleOnDecrement}>
  //         -
  //       </button>
  //       <p className="value" ref={p}>
  //         {value}
  //       </p>
  //       <button className="btn" onClick={handleOnIncrement}>
  //         +
  //       </button>
  //     </div>
  //     <form className="form" onSubmit={handleOnSubmit}>
  //       <input type="number" className="input" ref={input} />
  //       <button type="submit">Set fixed number</button>
  //     </form>
  //   </>
  // );

  // ########## With React and useState ##############################

  // Syntax for useState. First variabel in the array is the actual value. The second one is a function that updates the value. The names of the variable can be whatever. Ths convention is to always have a decent name that relates to the data, and that the update function is namned the same but with "set" before.
  const [inputValue, setInputValue] = useState<string>("12");
  const [value, setValue] = useState<number>(parseInt(inputValue));

  const handleOnDecrement = () => {
    // React WILL react on this change and trigger a rerender of the component.
    // Callback version of the set method.
    setValue((prevValue) => prevValue - 1);

    // If you need to base your updated value on the previous one, ALWAYS use the callback version of the set method.
  };

  const handleOnIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setValue(parseInt(inputValue));
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
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
        <input type="number" className="input" onChange={handleOnChange} value={inputValue} />
        <button type="submit">Set fixed number</button>
      </form>
    </>
  );
}
