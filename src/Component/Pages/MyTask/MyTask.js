import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const MyTask = () => {
    useTitle('my task')

    const [task, setTask] = useState([])
    console.log(task)
    useEffect(()=>{
        fetch('http://localhost:5000/mytask')
        .then(res=> res.json())
        .then(data=>setTask(data))
    },[])
    return (
        <div className='bg-blue-500'>
        <h1 className='text-center lg:text-5xl font-bold  text-green-700 pt-10 mb-5'>My tasks </h1>
        <div className='w-3/4 mx-auto'>

       
       {
        task.map(ts=> <div className='rounded bg-slate-500 mb-5 p-3 text-white'>

            <h3 className='font-semibold text-3xl border-y-orange-500'>Name: {ts?.name}</h3>
            <p>Email: {ts?.email}</p>
            <p>Date: {ts?.date}</p>
            <p>Task description: {ts?.taskDetails}</p>
            
             </div>)
       }
       
        <div>

        </div>
        </div>
        </div>
    );
};

export default MyTask;