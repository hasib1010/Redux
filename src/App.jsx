import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Components/fearures/counterSlice';

const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const handleIncrement=(counterId)=>{
    dispatch(increment(counterId))
  }
  const handleDecrement=(counterId)=>{
    dispatch((decrement(counterId)))
  }

  const totalSum = counters[0].value + counters[1].value;
  return (
    <>
      {
        counters[0].value
      }
<br />
      <button onClick={()=>handleIncrement(1)} className='mr-16 bg-indigo-950 text-white px-4 py-2'>Inreament</button>
      <button onClick={()=>handleDecrement(1)} className='mr-16 bg-red-600 text-white px-4 py-2'>Decreament</button>
      <br />
      {
        counters[1].value
      }
<br />
      <button onClick={()=>handleIncrement(2)} className='mr-16 bg-indigo-950 text-white px-4 py-2'>Inreament</button>
      <button onClick={()=>handleDecrement(2)} className='mr-16 bg-red-600 text-white px-4 py-2'>Decreament</button>
   


   <h4>Total: {totalSum}</h4>
    </>


  )

}
export default App;