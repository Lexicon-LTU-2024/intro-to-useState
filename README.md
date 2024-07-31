## Hooks

<details>
<summary>Table of contents</summary>

- [useState](#usestate)
  - [Two forms of the setState](#two-forms-of-the-setstate)

</details>

<br>

Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React version 16.8 to provide a way to use state and lifecycle features in functional components, which were traditionally only available in class components.

There are several hooks included in React and almost every "react specific third party library" is utilizing and provides hooks for us to use in our applications.

Hooks are very versatile and can be used in many different use cases. Think of them as special JS functions with access to all React features despite not being a component. They usually contain business logic so it can be reused across your application.

There are two rules that must be followed when using and creating them:

1. Only call hooks at the top level of your component.
2. Only call hooks from React functional components or other hooks.

[Back to top](#hooks)

### `useState`

`useState` hook is used to add state to functional components. The useState hook returns an array with two elements: the current state value and a function that allows you to update the state.

```tsx
import React, { useState } from "react";

function Counter() {
  // Declare a state variable named "count" with initial value 0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* onClick event handler to update the count state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

`useState<number>(0)` initializes the state variable count with an initial value of 0. The setCount function is used to update the value of count. When the button is clicked, it triggers the onClick event, and the setCount function is called to increment the count by 1.

React re-renders the component whenever the state is updated, and the updated state is reflected in the UI.

You can use multiple useState hooks in a single component to manage different pieces of state.

```tsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Your name is: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
```

In this example, there are two separate state variables, count and name, each with its own useState hook. The setCount and setName functions are used to update these state variables, and the UI is re-rendered accordingly.

[Back to top](#hooks)

#### Two forms of the setState

The set-method from the useState hook comes in two forms and they are:

- **Updating the state based on the previous value**

  If the new state depends on the previous state, it's recommended to use the functional form of `setState`, where you provide a function as an argument to `setState`. This function receives the previous state as its argument and returns the new state.

  ```js
  setState((prevState) => {
    // calculate and return new state based on prevState
    return newState;
  });
  ```

  This ensures that you are working with the latest state and helps prevent race conditions when updating state asynchronously.

- **Updating state without depending on the previous value**

  If the new state does not depend on the previous state, you can simply pass the new state value to `setState`. In this case, you can use the non-functional form of `setState`.

  ```js
  setState(newState);
  ```

Both forms of setState will trigger a re-render of the component with the updated state.

Here is an actual example of the usage of the different forms:

```tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    // Using the functional form of setState
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    // Using the non-functional form of setState
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

In the increment function, the functional form of setCount is used to correctly update the count based on its previous value. In the reset function, the non-functional form is used because the new state _( 0 in this case )_ does not depend on the previous state.

[Back to top](#hooks)
