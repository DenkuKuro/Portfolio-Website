import React from 'react'
import styles from '../styles'
import { contact_pic } from '../assets'

const Contact = () => {
  return (
    <section className='h-screen my-32 p-6 mb-56'>
      <div className=''>
        <h1 className='text-4xl'>Contact Me</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex my-15 justify-center h-full items-center gap-20'>
        <form action="" method='' className='flex flex-col h-3/4 w-1/4 bg-slate-400 justify-center'>
          <label for="name" className='w-full'>
            <h5>Name</h5>
            <input id="name" type="text" className='w-full'/>
          </label>
          <label for="email">
            <h5>Email</h5>
            <input id="email" type="text" className='w-full'/>
          </label>
          <label for="message">
            <h5>Message</h5>
            <input id="message" type="" className='w-full'/>
          </label>
          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
        <div className=''>
          <img src={contact_pic} alt="selfie of me" className='rounded-full h-72' />
        </div>
      </div>
    </section>
  )
}

export default Contact