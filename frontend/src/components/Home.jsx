import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-blue-300 justify-center items-center'>
        <h1 className='border-3 border-white rounded-3xl text-3xl p-5 m-10'>LEON'S TODO APP</h1>
        <div className='flex flex-col m-2 p-2'>
            <p><u>Note:</u></p>
            <p>TO CONTINUE USER SHOULD HAVE AN ACCOUNT</p>
        </div>
        <div className='flex max-sm:flex-col'>
            <div className=' p-5 m-5 flex flex-col justify-center border-2 border-white rounded-3xl items-center'>
                <p>Have an account</p>
                <Link to='/login' className='cursor-pointer hover:bg-red-700 m-4 p-2 px-5 border-2 border-white rounded-2xl bg-red-600 text-white'>Login</Link>
            </div>
            <div className=' p-5 m-5 flex flex-col justify-center border-2 border-white rounded-3xl  items-center'>
                <p>Create an account</p>
                <Link to='/signup' className='cursor-pointer hover:bg-red-700 m-4 p-2 px-5 border-2 border-white rounded-2xl bg-red-600 text-white'>Sign-up</Link>
            </div>
        </div>
    </div>
  )
}

export default Home