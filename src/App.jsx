import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto mt-32 text-center">
      <h1>React Redux App</h1>
      <div>
        <h1 className="mb-10">Increment and Decrement App</h1>
        <button onClick={() => dispatch(incNumber())} className="btn btn-xs">
          +
        </button>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered text-center"
          value={myState}
        />
        <button onClick={() => dispatch(decNumber())} className="btn btn-xs">
          -
        </button>
      </div>
    </div>
  );
};

export default App;
