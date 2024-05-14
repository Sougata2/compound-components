import Counter from "./Counter";
function App() {
  return (
    <>
      <h2>Compound components</h2>
      <Counter>
        <Counter.Label>My Super flexible counter</Counter.Label>
        <br />
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <div>
        <Counter>
          <Counter.Label>My Super flexible counter2</Counter.Label>
          <br />
          <Counter.Decrease icon="◀️" />
          <Counter.Count />
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </>
  );
}

export default App;
