import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/CounterSlice'

const Counter = () => {
  const [amount,setAmount]=useState(0)
  const {count}= useSelector(state=>state.counterReducer)
 const dispatch=useDispatch()
  const handleIncrementAmount =()=>{
    //dispatch action with input amount
  if(amount){dispatch(incrementByAmount(amount))}
  else{alert("Please Fill the Form")}
  }
  return (
    <div className='border rounded p-5 text-center'>
     <h1 style={{fontSize:'100px'}}>{count}</h1>
    <div style={{widows:'500px'}} className='d-flex justify-content-between mt-5'>
        <button onClick={()=>dispatch(decrement())}  className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
    </div>
    <div className="d-flex justify-content-between align-item-center mt-5">
        <input onChange={e=>setAmount(e.target.value)} placeholder='Input increment amount' type="text" className='form-control' />
        <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment by Amount</button>
    </div>
    </div>
  )
}

export default Counter
