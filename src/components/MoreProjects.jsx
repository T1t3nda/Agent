import React from "react"
import cleaning from "../assets/cleaning.svg"
import cleaners from "../assets/cleaners.svg"
import design from "../assets/design.svg"

const ProjectCard = ({ title, description, image }) => (
  <div className='bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105'>
    <img src={image} alt={title} className='w-full h-48 object-cover' />
    <div className='p-4'>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <a href='#' className='text-blue-500 hover:underline'>
        Read more &rarr;
      </a>
    </div>
  </div>
)

const MoreProjects = () => {
  const projects = [
    {
      title: "Medical Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,",
      image: cleaning,
    },
    {
      title: "Cryptocurrency Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,",
      image: design,
    },
    {
      title: "Bitcoin investment Web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,",
      image: design,
    },
  ]

  return (
    <section className='bg-gray-100 py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center'>
          More Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreProjects
