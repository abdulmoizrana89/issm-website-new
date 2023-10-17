import React from 'react'
import { productApplicationsData } from '../../../constants'
import Card from './Cards'

const ProductApplications = () => {
    return (
        <div id='ProductApplications' className='flex flex-col items-center mt-32 px-[5%]'>
            <div className='text-center md:px-10 lg:px-28'>
                <h1 className='text-white text-[24px] md:text-[32px] lg:text-[48px] mb-3'>Product Applications</h1>

            </div>

            <div className='flex flex-col items-center mt-10'>
                <ul className='flex justify-center w-full '>
                    <div className=' grid justify-items-center md:grid-flow-col grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2  gap-[5px] md:gap-x-[30px] '>
                        {productApplicationsData.map((index) => (
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

export default ProductApplications