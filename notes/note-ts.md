# Typescript in React Notes 
Having just finished working on some small React projects with JavaScript, I'm diving into TypeScript to make my code more robust and maintainable. TypeScript adds type safety and helps catch errors earilier, which is really useful for growing a React project. Here are some key TypeScript concetps that I think are crucial for me to understand and master as I move forward with React development: 

--- 

## 1. Understanding Basic Types 
Before diving into React components, it's crucial to understand the basic types in TypeScript:
- String: Represents text data
- Number: Represents numeric values 
- Boolean: Represents a true/false value 
- Array: Represents a list of values (e.g., number[] and Array<string>)
- Tuple: Represents an array with fixed length and types 
- Enum: A set of named constants, great for values like status codes
- Any: A fallback when you don't know the type(use sparingly)
- Void: Represents the abasence of a value, commonly used for functions with no return value.


--- 

## 2. Defining Props with Typescript 
When using React, passing props between components is key.  TypeScript allows us to define what type of props our components expect, 
which helps us avoid passing wrong types. 

```typescript 

// Define props type 
interface ButtonProps {
    label: string, 
    onClick: () => void; 
}
const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button onClick={onClick}>{label}</button>
}
```

--- 

## 3. Type Inference vs. Explicit Typing 
TypeScript is smart enough to infer types in most cases, but it's still helpful for us to explicitly define types, especially when the code gets more complex. 

- Example of Type Inference 
  
```typescript 
let message = "TypeScript knows this is a string" 
```

- Example of Explicit Typing 
  
```typescript 
let message: string = "Explicitly typed variable"
``` 

--- 
## 4. Functions and Arrow Functions in TypeScript 

When we define functions or arrow functions in TypeScript, it's important to specify the types of parameters and return values. This helps ensure that my functions behave as expected. 

```typescript 
const add = (a: number, b: number): number => a + b 
```

--- 
## 5. Mastering props and State in React 

When we need to get comfortable with typing **Props** and **State** in React. React components either receive data through **props** or manage their own **state**. TypeScript ensure that I'm passing and managing the right types of data. 

- Function Component 

```typescript 
type MyComponentProps = {
    title: string 
}

const MyComponent: React.FC<MyComponentProps> = {{title}} => {
    return <h1>{title}</h1>
}
```

- Class Component
```typescript 
interface CounterProps {
    initialCount: number 
}

interface CounterState {
    count: number 
}

class Counter extends React.Component<CounterProps, CounterState> {
    // 
    state = {count: this.props.initialCount}; 

    // here we define a function 
    // which 
    increment = () => this.setState({count: this.state.count + 1})

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
```


### Different Items in React TypeScript 
#### Combination 
- **Class Component + interface xxxProps + interface xxxState** 
- **Functional Component + type Props** 

- **Class Component** 

```typescript 
class CLSNAME extends React.Component<Props, State> {...}
```

- **Props Interface** 

```typescript 
interface xxxProps {...}
```

- **State Interface** 
  
```typescript 
interface xxxState {...}
```

- **Props Type** 

```typescript 
type xxxProps {...}
```

- **Function Component**
```typescript 
const xxxComponent extends React.FC<Props> {...}
```

--- 
## 6. Understanding React Hooks with TypeScript 

I've started using React hooks like `useState` and `useEffect`, and I  now realize that TypeScript works really well with them! While TypeScript often infers types for me, it's important to explicitly define types for hooks, especially when using custom hooks. 

- Usage of **useState** with TypeScript 
```typescript 
// little different from the JS React is the type explicitly usage 
const [count, setCount] = React.useState<number>(0); 

// javascript's useState will infer type for us and does not support <number> this grammar 
const [count, setCount] = useState(0)
```

- Usage of **useEffect** with TypeScript 
```typescript 
// well .. the same as JS React =.=
```


--- 
## 7. Generics in TypeScript 
Generics are a bit tricky, but they're super powerful once I get the hang of them. They allow me to write functions or components that work with any data type, which is really useful for reusable code.

```typescript 
function identity<T> (value: T): T {
    return value 
}

let numberIdentity = identity<number>(42); 
let stringIdentity = identity<string>('test'); 
```

--- 
## 8. Interfaces vs Types 
At first, I was confused about when to use interface versus in TypeScript.After some research, I realized that **interfaces** are used for defining shapes of objects, while **types** are more flexible and can define unions, intersections, and complex types. 

- Interfaces 

```typescript 
interface Car {
    brand: string, 
    model: string 
}

const myCar: Car = {brand: 'Toyota', model: 'Corolla'}
```

- Types 
```typescript 
type Vehicle = {wheels: number}
type Car = Vehicle & {brand: stirng, model: string}

const myCar: Car = {wheels: 4, brand: 'Toyota', model: 'Corolla'}
```

--- 
## 9. Event Handling with TypeScript 
In React, handling events like `onClick` or `onChange` is a common task. TypeScript makes it easier by giving me the right types for event parameters, which reduces the change of mistakes. 

- Event Handling 
```typescript 
const handleClick = (event: React.MouseEvent<HTMLButtonElement> => {
    console.log(event.currentTarget) // accessing the button element 
})
```

--- 
## 10. Using Utility Types 
TypeScript has built-in utility types like `Partial`, `Required`, and `Pick` that help simplify common coding patterns. These are useful as i start working with more complex data structures. 

```typescript 
interface CardProps {
    title: string, 
    description: string 
}

const Card: React.FC<Partial<CardProps>> = {{title, description = 'Default description'}} => {
  return (<div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>)
}
```

--- 
