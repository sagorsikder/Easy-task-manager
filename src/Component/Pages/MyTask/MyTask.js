import React from 'react';
import useTitle from '../../Hooks/useTitle';

const MyTask = () => {
    useTitle('my task')
    return (
        <div>
            <h1 className='text-center'>This is my task page.</h1>
        </div>
    );
};

export default MyTask;