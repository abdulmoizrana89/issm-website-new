import React from 'react'
import { teamData } from '../../constants'
import Card from './Cards'

const Team = () => {
    return (
        <div id='Team' className='flex flex-col items-center mt-[160px] px-[5%]'>
            <div className='text-center md:px-10 lg:px-28'>
                <h1 className='text-white text-[24px] md:text-[32px] lg:text-[48px] mb-3'>Meet the ISSM.AI Executive Team  </h1>
                <text className=' text-[12px] md:text-[16px] lg:text-[28px]'>
                    Our leadership team possesses extensive experience in the Artificial Intelligence field and and working towards pioneering technology innovations.
                </text>
            </div>

            <div className='flex flex-col items-center mt-10 w-full sm:px-[10%]'>
                <ul className='flex justify-center w-full'>
                    <div className=' grid justify-items-center lg:w-full md:grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2  gap-[10px] md:gap-x-[30px] '>

                        {teamData.map((index) => (
                            <li key={index} className='mb-[30px] lg:w-full'>
                                <Card {...index} />
                            </li>
                        ))}

                    </div>
                </ul>
            </div>

        </div>

    )
}

export default Team