import React from 'react'
import { applicationsData } from '../../../constants'
import Card from './Cards'

const AiApplications = () => {
  return (
    <div id='AIApplications' className='flex flex-col items-center mt-32 px-[5%]'>
      <div className='text-center md:px-10 lg:px-28'>
        <h1 className='text-white text-[24px] md:text-[32px] lg:text-[48px] mb-3'>ISSM's AI Applications</h1>
        <text className=' text-[12px] md:text-[16px] lg:text-[28px]'>
          ISSM's suite of AI applications, including B3.ai for smart management, XIVA for exceptional customer service, Digital Eye for advanced computer vision, and DFD for seamless speech interactions, empowers industries with cutting-edge AI solutions for enhanced performance and productivity.
        </text>
      </div>

      <div className='flex flex-col items-center mt-10'>
        <ul className='flex justify-center w-full '>
          <div className=' grid justify-items-center grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cos-4 lg:grid-rows-1  gap-[5px] md:gap-x-[30px] '>
            {applicationsData.map((index) => (
              <li key={index.title} className='mb-[30px]'>
                <Card {...index} />
              </li>
            ))}
          </div>

        </ul>
      </div>

    </div>

  )
}

export default AiApplications