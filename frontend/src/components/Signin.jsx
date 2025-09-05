import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react'



const Signin = () => {

    const [UserName, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate=useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        const empdata = {
            username: UserName,
            password: pass,
            todos:[]
        };

        axios.post('http://localhost:8000/users', empdata)
            .then(response => {
                console.log('User created:', response.data);
                alert("Signup successful! Please login.");
                navigate("/login");
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    }


    return (
        <div className=' w-screen h-screen flex justify-center items-center  bg-blue-300 '>
            <Link to="/" className='absolute top-3 left-3 hover:bg-red-700 cursor-pointer rounded-2xl bg-red-600 border-white border-2 text-white m-3 p-2.5 px-5'>Back</Link>

            <form onSubmit={handleSubmit} className='border-white mt-[50px] border-2 flex flex-col rounded-4xl justify-center items-center px-7 py-7'>
                <div className='flex flex-col m-2'>
                    <label className='m-1 p-1 '>UserName:</label>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Name' className='outline-none border-2 border-white rounded-xl h-[40px] w-[270px] m-1 p-2' type='text' required></input>
                </div>
                <div className='flex flex-col m-1'>
                    <label className='m-1 p-1 '>Password:</label>
                    <input placeholder='Enter Your password' onChange={(e) => setPass(e.target.value)} className='outline-none  border-white border-2 rounded-xl h-[40px] w-[270px] m-1 p-2' type='password' required></input>
                </div>

                <button type='submit' className=' rounded-2xl  border-white border-2 bg-red-600 text-white m-3 p-2.5 px-25'>Sign in</button>

            </form>
        </div>
    )
}

export default Signin