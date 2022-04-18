import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-7xl text-gray-600'>
                Opps !
            </h1>
            <p className='text-center mt-8 text-gray-400'>
                Page not found
            </p>

           <div className='flex justify-center mt-6'>
           <Link className='p-2 border rounded bg-slate-100 hover:bg-slate-200' to="/">
            Back to home
            </Link>
           </div>
        </div>
    );
};

export default NotFound;