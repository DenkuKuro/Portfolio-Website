import React from 'react'
import styles from '../styles'
import { contact_pic } from '../assets'

const Contact = () => {
  return (
    <section className='h-full my-32 p-6 mb-56'>
      <div className=''>
        <h1 className='text-4xl'>Contact Me</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex mt-32 justify-center h-full items-center gap-20'>
        <form action="" method='' className='flex flex-col h-2/4 w-2/5 bg-slate-800 justify-center px-8 text-black rounded-md py-10'>
          <h1 className='text-center text-lg m-0 p-0'>Send me a message!</h1>
          <label for="name" className='w-full'>
            <h5>Name</h5>
            <input id="name" type="text" className='w-full text-black'/>
          </label>
          <label for="email">
            <h5>Email</h5>
            <input id="email" type="text" className='w-full text-black'/>
          </label>
          <label for="message">
            <h5>Message</h5>
            <textarea name="message" id="message" rows={5} cols={52} className='text-black'></textarea>
          </label>
          <button type="submit" class={`${styles.btn} ${styles} text-white`}>Submit</button>
        </form>
        <div className=''>
          <img src={contact_pic} alt="selfie of me" className='rounded-full h-72' />
        </div>
      </div>
    </section>
  )
}

export default Contact