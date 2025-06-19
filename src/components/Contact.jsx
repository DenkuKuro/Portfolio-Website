import React from 'react'
import styles from '../styles'

const Contact = () => {
  return (
    <section className='h-full my-32 p-6 flex md:flex-row flex-col mb-56'>
      <div className=''>
        <h1 className='text-4xl'>Experience</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex'>
        <form action="" method='' className=''>
          <label for="name">
            <input id="name" type="text" />
          </label>
          <label for="email">
            <input id="email" type="text" />
          </label>
          <label for="message">
            <input id="message" type="" />
          </label>
          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
        <div className=''>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact