import React from 'react'
import styles from '../styles'

const Contact = () => {
  return (
    <section className='h-full my-32 p-6 flex md:flex-row flex-col mb-56'>
      <h1>Contact Me</h1>
      <div className='flex'>
        <form action="" method=''>
          <label for="name">
            <input id="name" type="text" />
          </label>
          <label for="email">
            <input id="email" type="text" />
          </label>
          <label for="message">
            <input id="message" type="" />
          </label>
          <button type="button" class="btn btn-outline-primary"></button>
        </form>
        <div className=''>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact