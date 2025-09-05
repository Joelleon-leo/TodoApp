import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const login = () => {
    const [UserName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(
                `http://localhost:8000/users?username=${UserName}&password=${pass}`
            );

            if (res.data.length > 0) {
                alert('Login successful!');
                const userId=res.data[0].id;
                navigate(`/todolist/${userId}`);
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-blue-300'>
            <Link
                to="/"
                className='absolute top-3 left-3 hover:bg-red-700 cursor-pointer rounded-2xl bg-red-600 border-white border-2 text-white m-3 p-2.5 px-5'
            >
                Back
            </Link>
            <form
                onSubmit={handleLogin}
                className='mt-[50px] border-2 border-white flex flex-col rounded-4xl justify-center items-center px-7 py-7'
            >
                <div className='flex flex-col m-2'>
                    <label className='m-1 p-1'>Username:</label>
                    <input
                        placeholder='Enter Your Name'
                        className='outline-none border-2 border-white rounded-xl h-[40px] w-[270px] m-1 p-2'
                        type='text'
                        value={UserName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className='flex flex-col m-1'>
                    <label className='m-1 p-1'>Password:</label>
                    <input
                        placeholder='Enter Your password'
                        className='outline-none border-2 border-white rounded-xl h-[40px] w-[270px] m-1 p-2'
                        type='password'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                </div>

                <button
                    type='submit'
                    className='hover:bg-red-700 cursor-pointer rounded-2xl bg-red-600 border-white border-2 text-white m-3 p-2.5 px-25'
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default login