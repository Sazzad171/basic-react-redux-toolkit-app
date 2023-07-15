import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countByAmount, decrement, increment, reset } from './counterSlice';

const CounterView = () => {
    // get state value
    const count = useSelector(state => state.counter.count);

    // use dispatch initilize
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{ count }</h4>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(countByAmount())}>Inc. By Amount</button>
        </div>
    )
}

export default CounterView;