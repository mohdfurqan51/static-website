import React from 'react'
import serviceImage from '../images/serviceImage.png'
import nearby from '../images/nearby.png'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='container mx-auto py-12 flex mt-24'>
        <Image className="border-solid border-4 rounded-lg mr-8" src={serviceImage} alt="" height={800}/>
        <Image className="border-solid border-4 rounded-lg" src={nearby} alt="" height={800}/>
    </div>
  )
}

export default Services