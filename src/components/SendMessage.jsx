import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] rounded flex text-xl absolute bottom-0'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='placeholder-black w-full text-xl p-3 border-y border-gray-400 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 text-black rounded outline-none'
        type='text'
        placeholder='Message'
      />
      <button className='w-[20%] bg-gradient-to-r  from-orange-500 via-orange-400 to-orange-400 border-y border-gray-400 rounded' type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;