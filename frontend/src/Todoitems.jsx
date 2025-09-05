import React from 'react'
import deleteicon from './images/delete.png';
import arrow from './images/arrow.png';

const Todoitems = ({text,id,onDelete}) => {
  
  return (
    <div>
        {/* --------------------todo items-------------------- */}

      <div className='border-1 border-white rounded-2xl w-[400px]  my-[10px]  py-[8px]  px-[10px]
      flex flex-row items-center '>
      <img className='h-[30px] w-[30px]' src={arrow}></img>
      <p className='px-4.5 text-white text-xl'>{text}</p>
      <img onClick={()=>{onDelete(id)}} className=' h-[30px] w-[30px] absolute right-10 cursor-pointer' src={deleteicon}></img>
      </div>
    </div>
  )
}

export default Todoitems  