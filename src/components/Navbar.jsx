import React, { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <a href='#' className='flex items-center'>
              <div className='w-8 h-8 bg-primary rounded-full mr-2'></div>
              <h2 className='text-xl font-bold'>Logoipsum</h2>
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Home
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Services
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                About Us
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <button className='bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition duration-300'>
              Contact
            </button>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              Services
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              About Us
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              Portfolio
            </a>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-200'>
            <div className='flex items-center px-5'>
              <button className='bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition duration-300 w-full'>
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
