import React from 'react'
import { projects } from '../constants'

const Carousel = () => {
  return (
    <>
        {/* <!-- Carousel --> */}
        <div id="hs-carousel" className="relative" data-hs-carousel='{"loadingClasses": "opacity-0"}' >
            <div className="hs-carousel relative w-full min-h-96 overflow-hidden">
                {/* <!-- Carousel Body --> */}
                <div className="hs-carousel-body flex flex-nowrap absolute top-0 bottom-0 start-0 transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide ">
                        <div className="flex justify-center h-full bg-surface p-6">
                            <img className='w-full h-full' src={projects[0].img} alt={projects[0].title} />
                            <div className='flex w-full h-full'>
                                
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide ">
                        <div className="flex justify-center h-full bg-surface-1 p-6">
                            <span className="self-center text-4xl text-foreground transition duration-700">Second slide</span>
                        </div>
                    </div>
                    <div className="hs-carousel-slide ">
                        <div className="flex justify-center h-full bg-surface-2 p-6">
                            <span className="self-center text-4xl text-foreground transition duration-700">Third slide</span>
                        </div>
                    </div>
                </div>
                {/* <!-- End Carousel Body --> */}
            </div>

            {/* <!-- Arrows --> */}
            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-10 bg-layer text-layer-foreground rounded-full shadow-2xs hover:bg-layer-hover -translate-y-1/2 focus:outline-hidden">
                <span className="text-2xl" aria-hidden="true">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-10 bg-layer text-layer-foreground rounded-full shadow-2xs hover:bg-layer-hover -translate-y-1/2 focus:outline-hidden">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
            </button>
            {/* <!-- End Arrows --> */}
        </div>
        {/* <!-- End Carousel --> */}
    </>
  )
}

export default Carousel