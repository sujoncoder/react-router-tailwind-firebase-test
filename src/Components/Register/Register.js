import React from 'react';
import { ImGoogle3 } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='flex justify-center'>

            <form onSubmit={handleSubmit} className='border border-green-200 rounded px-12 py-4 shadow-md my-4 hover:shadow-lg'>

                <h1 className='text-center text-2xl font-bold text-orange-300'>Please Register!</h1><br />

                <input className='pl-5 text-blue-300 font-semibold border w-80 h-10 rounded border-gray-200 shadow hover:border-gray-400' type="text" placeholder='Enter your name'/><br /><br />

                <input className='pl-5 text-blue-300 font-semibold border w-80 h-10 rounded border-gray-200 shadow hover:border-gray-400' type="email" placeholder='Enter your email'/><br /><br />

                <input className='pl-5 text-blue-300 font-semibold border w-80 h-10 rounded border-gray-200 shadow hover:border-gray-400' type="password" placeholder='Enter your password'/><br /><br />

                <div className='flex justify-center border rounded-lg bg-slate-200 hover:bg-slate-300 py-1 text-lg text-gray-700 cursor-pointer'>
                <input className='cursor-pointer font-medium' type="submit" value="Register" />
                </div>
                
                <div className='flex justify-center mt-2'>
                    <Link to="/login" className="text-orange-400 hover:underline">Already have an account!</Link>
                </div>

                {/* //! or area */}
                <div className='flex items-center my-4'>
                    <div className='border-b-2 border-orange-400 w-1/2'></div>
                    <span className='mx-2 text-lg text-green-700'>or</span>
                    <div className='border-b-2 border-pink-400 w-1/2'></div>
                </div>

                {/* //! icon area */}
                <div className='flex justify-center space-x-4'>
                    <ImGoogle3 className='cursor-pointer w-8 h-8 text-gray-500 hover:text-gray-700'/>
                    <BsFacebook className='cursor-pointer w-8 h-8 text-gray-500 hover:text-gray-700'/>
                    <GoMarkGithub className='cursor-pointer w-8 h-8 text-gray-500 hover:text-gray-700'/>
                </div><br />
            </form>

        </div>
    );
};

export default Login;