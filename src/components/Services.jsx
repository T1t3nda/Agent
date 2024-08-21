import React from "react"
import Web from "../assets/web.svg"
import UX from "../assets/UX.svg"
import seo from "../assets/seo.svg"
import graphics from "../assets/graphics.svg"

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      src: Web,
    },
    {
      id: 2,
      name: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      src: UX,
    },
    {
      id: 3,
      name: "Graphics design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      src: graphics,
    },
    {
      id: 4,
      name: "SEO Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      src: seo,
    },
  ]

  return (
    <section id='Services' className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='text-gray-500 text-lg sm:text-xl mb-2'>Services</p>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4'>
            We Provide
          </h2>
          <p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non. Viverra nec eu.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105'
            >
              <img
                src={service.src}
                alt={service.name}
                className='w-16 h-16 mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold mb-2 text-center'>
                {service.name}
              </h3>
              <p className='text-gray-600 text-center'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
