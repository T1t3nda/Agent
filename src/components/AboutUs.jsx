import React from "react"
import about_icon from "../assets/about.svg"

const AboutUs = () => {
  return (
    <section className='bg-white py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='hidden lg:block'>
            <img
              src={about_icon}
              alt='Picture of businessman'
              className='w-full h-auto'
            />
          </div>
          <div>
            <p className='text-gray-500 text-lg sm:text-xl mb-2'>About us</p>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4'>
              We are a creative agency
            </h2>
            <p className='text-gray-600 text-base sm:text-lg mb-4'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className='text-gray-600 text-base sm:text-lg mb-6'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='bg-primary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-dark transition duration-300'>
              More about us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
