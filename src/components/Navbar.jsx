import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className='border-y border-gray-400 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-black h-24 flex justify-between items-center p-4 rounded'>
      <h1 className='text-black text-3xl'>Chat Room</h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;