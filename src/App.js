//Traditional === html page., but in react  Component
const App = () => {
  //Basic syntax
  const element = <h2>Hello World!</h2>;
  //return element;
  //Embedded expressions
  const name = "ReactJs Developer";
  const element2 = (
    <h1>
      Hello, {name} {2 + 3}
    </h1>
  );
  // return element2;

  //JSX as an expression
  const element3 = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toString()}</h2>
    </div>
  );
  return element3;
};

export default App;
