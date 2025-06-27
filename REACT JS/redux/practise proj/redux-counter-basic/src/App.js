import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, reset } from "./redux/actions/counterActions";

function App() {
  // useSelector lets you read the value from redux store
  const count = useSelector((state) => state.counter.value);
  // useDispatch
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux Counter (No Toolkit)</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())} style={{ marginLeft: 10 }}>
        Decreament
      </button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: 10 }}>
        Reset
      </button>
    </div>
  );
}

export default App;
