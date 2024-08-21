import React from "react"
import {
  FaFacebookF,
  FaPinterestP,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa"
import jane from "../assets/jane.svg"
import kristin from "../assets/kristin.svg"
import brooklyn from "../assets/Brooklyn.svg"
import guy from "../assets/Guy.svg"

const TeamMember = ({ name, role, image }) => (
  <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'>
    <img src={image} alt={name} className='w-full h-48 object-cover' />
    <div className='p-4'>
      <h3 className='text-lg font-semibold mb-1'>{name}</h3>
      <p className='text-gray-600 mb-4'>{role}</p>
      <div className='flex space-x-2'>
        <FaFacebookF className='text-gray-400 hover:text-blue-500 cursor-pointer' />
        <FaPinterestP className='text-gray-400 hover:text-blue-500 cursor-pointer' />
        <FaDribbble className='text-gray-400 hover:text-blue-500 cursor-pointer' />
        <FaInstagram className='text-gray-400 hover:text-blue-500 cursor-pointer' />
      </div>
    </div>
  </div>
)

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Jane Cooper",
      role: "Developer",
      image: jane,
    },
    {
      name: "Brooklyn Simmons",
      role: "Designer",
      image: brooklyn,
    },
    {
      name: "Guy Hawkins",
      role: "Marketer",
      image: guy,
    },
    {
      name: "Kristin Watson",
      role: "Photographer",
      image: kristin,
    },
  ]

  return (
    <section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Meet Our Team</h2>
          <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
            Our Expert Members
          </h3>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            vivamus pretium maecenas amet.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeam
