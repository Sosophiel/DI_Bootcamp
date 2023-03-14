import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {incrementCounter, decrementCounter} from '../redux/actions';

  
 const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()


    const increment = () => {
        dispatch(incrementCounter())
    }    
    const decrement = () => {
        dispatch(decrementCounter())
    }  
    const incrementIfodd = () => {
        if(counter % 2 === 1) {
            dispatch(incrementCounter())
        }

    }  
    const incrementAsync = () => {
         setTimeout(()=> {
            dispatch(incrementCounter())
        }, 2000)

    }  

    return(
        <div>
            <span>Clicked: {counter} times</span>
            <button onClick={() => increment()} type='button'>+</button>
            <button onClick={() => decrement()} type='button'>-</button>
            <button onClick={() => incrementIfodd()} type='button'>Increment if odd</button>
            <button onClick={() => incrementAsync()} type='button'>Increment async</button>
        </div>

    )
}

export default Counter