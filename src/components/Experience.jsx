import React from 'react'
import { experience } from '../constants'
import styles from '../styles'

const Experience = () => {
  return (
    <section id='experience' className='my-8 w-full'>
      <div className=''>
        <h1 className='text-4xl'>Experience</h1>
        <div className='w-full border-b-[0.5px] border-gradient border-gradient-red my-2'></div>
      </div>
      <div className='flex flex-wrap'>
        <div className='flex'>
            <h1 className=''>
                Title
            </h1>
            <h2 className=''>
                Company
            </h2>
            <h3 className=''>
                Date
            </h3>
            <ul className=''>
                <li className=''>
                    Item
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience