import React from "react"
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaBehance,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <div className='w-8 h-8 bg-primary rounded-full mr-2'></div>
              <h2 className='text-xl font-bold'>Logoipsum</h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              nulla massa fringilla.
            </p>
            <div className='flex space-x-4'>
              <FaTwitter className='text-gray-400 hover:text-blue-500 cursor-pointer' />
              <FaInstagram className='text-gray-400 hover:text-blue-500 cursor-pointer' />
              <FaLinkedin className='text-gray-400 hover:text-blue-500 cursor-pointer' />
              <FaYoutube className='text-gray-400 hover:text-blue-500 cursor-pointer' />
              <FaWhatsapp className='text-gray-400 hover:text-blue-500 cursor-pointer' />
              <FaBehance className='text-gray-400 hover:text-blue-500 cursor-pointer' />
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Menu</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Blog post
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Utility Pages</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Start Here
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Styleguide
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Password Protected
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  404 Not Found
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-500'>
                  Licenses
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit am dolor
              sit.
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0'
              />
              <button className='bg-primary text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
