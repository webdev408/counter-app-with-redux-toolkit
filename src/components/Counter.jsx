import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../features/counter/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  const show = useSelector((store) => store.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseByHandler = () => {
    dispatch(counterActions.increaseBy(10));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <div className='container'>
      <h1 className='heading'>My Counter Palette</h1>
      {show && <div className='content'>{counter}</div>}
      <button className='btn' onClick={incrementHandler}>Increment</button>
      <button className='btn' onClick={decrementHandler}>Decrement</button>
      <button className='btn' onClick={increaseByHandler}>IncreaseBy</button>
      <button className='btn' onClick={toggleHandler}>Toggle</button>
    </div>
  )
};