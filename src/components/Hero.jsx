import React from "react"
import Hero_icon from "../assets/Hero.svg"

const Hero = () => {
  return (
    <section className='bg-white py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4'>
              We are the best agency in the world
            </h1>
            <p className='text-gray-600 text-base sm:text-lg mb-6'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-primary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-dark transition duration-300'>
                Start a Project
              </button>
              <button className='border border-primary text-primary px-6 py-3 rounded-md text-base font-medium hover:bg-primary hover:text-white transition duration-300'>
                Learn More
              </button>
            </div>
          </div>
          <div className='hidden lg:block'>
            <img
              src={Hero_icon}
              alt='Picture of businessman'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
