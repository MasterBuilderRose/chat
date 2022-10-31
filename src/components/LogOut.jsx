import React from 'react'
import {auth} from '../firebase'



const LogOut = () => {
    
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className='bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 border-y border-gray-400 rounded px-4 py-2 hover:bg-gray-100'>
        Logout
    </button>
  )
}

export default LogOut