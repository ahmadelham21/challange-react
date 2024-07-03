import { useGlobalDispatch, useGlobalState } from "../../state/GlobalState";

const Counter = () => {
  const { count } = useGlobalState();
  const dispatch = useGlobalDispatch();

  return (
    <div>
      <div className="container">
        <h1>Count: {count}</h1>

        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
