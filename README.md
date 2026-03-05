1. What is JSX, and why is it used?

#Answer: JSX (JavaScript XML) is a syntax extension, HTML-like code inside JavaScript and it is mainly used in React. Why we use it:Readability and Clarity,Component-Based Structure, Security, Expressiveness. 


2. What is the difference between State and Props?

#Answer: 
- Props Passed from a parent component to a child component (unidirectional flow), State managed internally by the component itself .
- Props accessible by child components and state cannot be accessed directly by child components (unless passed down as props).
- Props external to the component; controlled by the parent component that passes them down but State internal to the component; controlled by the component itself.
- Props Used for dynamic data and State used for passing data between components


3. What is the useState hook, and how does it work?

#Answer: useState is a React Hook that allows functional components to manage state. useState simplifies state management, makes code cleaner, and integrates seamlessly with other React hooks. It's perfect for managing simple, local state within a single component. 
it returns an array with exactly two values:
-The current state value.
-A state setter function to update that value and trigger a re-render.


4. How can you share state between components in React?

#Answer: state between components data moves downward (Unidirectional Data Flow) by lifting the state up, Context API, State Management Libraries. 



5. How is event handling done in React?
#Answer: Event handling done in React by CamelCase Event Names, Passing Functions as Handlers, Event Object, Binding this (for Class Components), Common Events. 
