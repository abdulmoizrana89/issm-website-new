import React from 'react'
import { goalAnimation } from '../../../assets'

const Goal = () => {
    return (
        <div className='relative flex mt-[104px] xl:mt-[140px] h-[80vh] xl:h-[85vh] w-full overflow-hidden'>
            <div className='h-full w-full'>
                <video src={goalAnimation}
                    autoPlay
                    loop
                    muted
                    className='h-full w-full object-cover object-top'
                >
                </video>
            </div>
            <div className='absolute bottom-[20%] md:bottom-10 lg:bottom-[15%] flex flex-col text-white w-full px-5 md:px-10 lg:pr-56 lg:pl-20'>
                <h1 className=' text-[35px] md:text-[50px] lg:text-[60px]  font-bold'>One Engine, Infinite Innovations:<br /> Beyond Traditional AI</h1>
                <h2 className='md:flex hidden text-[20px] md:text-[40px]  lg:text-[50px] mt-5 font-semibold'>
                    One Engine, Multiple Facets of Enterprise Excellence

                </h2>
                <p className='md:flex hidden text-[16px] lg:text-[30px] mt-2 font-medium'>
                    Our singular, dynamic engine is a testament to the versatility and adaptability of our AI prowess. It's this centralized powerhouse that seamlessly powers a diverse range of applications - from nuanced Conversational AI dialogues to advanced CCTV analytics. Whether facilitating precise User Authentication Suites, ensuring meticulous Document Digitization, or optimizing OCR/ICR Applications and ERP solutions, our unified approach ensures consistency, agility, and unparalleled performance across the board. With one engine, we've redefined the spectrum of enterprise AI applications.                </p>
            </div>
        </div>
    )
}

export default Goal