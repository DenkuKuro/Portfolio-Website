import React, { useState } from 'react'
import { projects } from '../constants'

const slides = [
  { content: 'Slide 1', color: 'bg-blue-200' },
  { content: 'Slide 2', color: 'bg-green-200' },
  { content: 'Slide 3', color: 'bg-yellow-200' },
];

const Carousel = () => {
const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden min-h-xxl w-full mx-auto">
      {/* The moving track */}
      <div 
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className={`min-w-full min-h-[600px] flex items-center justify-center ${s.color}`}>
            <div className='flex'>
                <img className='max-w-[600px]' src={projects[0].image} alt={projects[0].title} />
                <div className='mx-10'>
                    <h1>{projects[0].title}</h1>
                    <h2>{projects[0].tech}</h2>
                    <h3>description</h3>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 hover:bg-white">Prev</button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 hover:bg-white">Next</button>
      </div>
    </div>
  )
}

export default Carousel