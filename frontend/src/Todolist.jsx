import React, { useState } from 'react'
import Todoitems from './Todoitems'
import check from './images/check list.png'
import { useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Todolist = () => {



  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');
  const {id}=useParams();
  const navigate=useNavigate();

   useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`)
      .then(res => {
        console.log('Fetched user todos:', res.data.todos);
        setValue(res.data.todos || []); // Set todos from user data
      })
      .catch(err => {
        console.error("Error fetching todos:", err);
      });
  }, [id, navigate]);

 const deletetodo = async (todoId) => {
  try {
    // First, fetch the current user data
    const userResponse = await axios.get(`http://localhost:8000/users/${id}`);
    const currentUser = userResponse.data;
    
    // Filter out the todo to be deleted
    const updatedTodos = currentUser.todos.filter((todo) => todo.id !== todoId);
    
    // Create updated user object with the filtered todos
    const updatedUser = {
      ...currentUser,
      todos: updatedTodos
    };
    
    // Update the user with the modified todos array using PUT
    await axios.put(`http://localhost:8000/users/${id}`, updatedUser);
    
    // Update local state to reflect the deletion
    setValue((prev) => prev.filter((todo) => todo.id !== todoId));
    
    console.log('Todo deleted successfully');
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};


function handleSubmit(e) {
  e.preventDefault();

  // Don't submit if input is empty
  if (!input.trim()) {
    return;
  }

  const newTodo = {
    id: Date.now().toString(), 
    task: input.trim(),
    completed: false
  };

  axios.get(`http://localhost:8000/users/${id}`)
    .then(userResponse => {
      const currentUser = userResponse.data;
      console.log(currentUser)
      // Create updated user object with new todo added to todos array
      const updatedUser = {
        ...currentUser,
        todos: [...currentUser.todos, newTodo]
      };
      console.log(updatedUser)

      // Update the user with the new todo
      return axios.put(`http://localhost:8000/users/${id}`, updatedUser);
    })
    .then(response => {
      console.log('Todo added to user:', response.data.todos);
      setValue(prev => [...prev, newTodo]); // Use newTodo instead of task
      setInput("");
    })
    .catch(error => {
      console.error('Error adding todo to user:', error);
    });
}

    const handleLogout = () => {
    navigate("/login"); 
  };


  return (
    <div className='flex items-center justify-center w-screen h-screen bg-linear-to-r/hsl from-indigo-500 to-teal-400'>
      <div className='h-[600px] relative shadow-xl/30 w-[450px] border-3 border-white rounded-2xl flex flex-col gap-1 items-center '>

        {/*-------------------heading-------------------*/}

        <div className='rounded-2xl  bg-yellow-400 border-3 border-white text-center text-3xl text-white my-[10px] px-[10px] py-[10px] flex flex-row'>
          <img className='h-[50px] w-[50px]' src={check}></img>
          <p className='pt-[5px] pl-[8px]'>TODO APP</p>
        </div>

        {/* ------------------Search Bar---------------- */}

        <form onSubmit={handleSubmit} className='w-[400px] my-[10px] py-[15px] flex flex-row'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='border-3 border-white bg-white text-center text-l p-[5px] rounded-3xl w-[300px]'
            type='text'
            placeholder='Enter an Activity'
          />
          <button
            type="submit"
            className='border-3 border-white bg-red-600 text-white cursor-pointer rounded-3xl text-center w-[100px] h-[35px]'
          >
            ADD
          </button>
           <button onClick={handleLogout}  className='border-3 border-white bg-red-600 text-white cursor-pointer rounded-3xl text-center w-[100px] h-[35px]'>Logout</button>
        </form>


        <div>
          {
            value.map((item) => {
              return <Todoitems key={item.id} text={item.task} id={item.id} onDelete={deletetodo} />
            })
          }
        </div>


      </div>
    </div>



  )
}

export default Todolist