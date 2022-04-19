import React, { useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { HiMenu } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const routes = [
        {id:1,name:'Home',path:'/'},
        {id:2,name:'about',path:'/about'},
        {id:3,name:'blog',path:'/blog'},
        {id:4,name:'secret',path:'/secret'},
        {id:5,name:'register',path:'/register'},
        {id:6,name:'login',path:'/login'},

    ]
    return (
        <div>
            <h1 className='text-center text-4xl text-gray-800'>
                Wellcome to my react router tailwind and firebase project
            </h1>

            <div onClick={()=> setOpen(!open)} className="md:hidden">
                {
                  open ? <BiArrowBack/> : <HiMenu/>
                }
            </div>

            <ul className= {`md:flex bg-gray-100 py-4 md:static justify-center my-4 absolute duration-1000 ${ open ? 'left-2' : 'left-[-100px]'}`}>
                
                {
                    routes.map(route =>
                    <li className='uppercase ml-4 font-bold'
                    key={route.id}
                    >
                    <CustomLink to={route.path}>{route.name}</CustomLink>
                    </li> )
                }
                <div>
                    {
                        user && <button onClick={handleSignOut} className='border px-4 py-1 rounded-md bg-slate-400 ml-4 text-md'>sign out</button>
                    }
                </div>
            </ul>
        </div>
    );
};

export default Header;