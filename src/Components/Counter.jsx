import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementbyAmount, decrementbyAmount } from '../Redux/Reducer/Reducer'

function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <h1 className="counter-value"> React Redux example - Counter</h1><br />
      <div className="counter-container">

        <button className='counter-button decrement' onClick={() => dispatch(decrementbyAmount(5))}>Decrement 5</button>
        <button className="counter-button decrement" onClick={() => dispatch(decrement())}>Decrement</button>


        <h4 className="counter-value">{count}</h4>

        <button className="counter-button increment" onClick={() => dispatch(increment())}>Increment</button>
        <button className='counter-button increment' onClick={() => dispatch(incrementbyAmount(5))}>Incrementby 5</button>
      </div>
    </>

  )
}

export default Counter