import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'
import Hadding from '../components/Hadding'

const Home = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    let pluse = () => {
        dispatch(increment())
    }
    let minis = () => {
        dispatch(decrement())
    }
   
    return (




        <>
            <div className='w-[1450px] mx-auto flex gap-5' >

                <button className='px-5 py-4 bg-orange-500 text-5xl text-white' onClick={pluse} dispatch>+</button>
                <h1>{count}</h1>
                <button className='px-5 py-4 bg-orange-500 text-5xl text-white' onClick={minis} >-</button>
            </div>


<div className="">
<Hadding text={'hellow my name is asif  i am from  dhaka #bangladesh# '}  />
    </div>            

        </>

    )
}

export default Home