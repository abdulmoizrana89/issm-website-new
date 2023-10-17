import React from 'react'
import { heroAnimation } from '../../../assets'

const Hero = () => {
    return (
        <div className='relative flex mt-[104px] xl:mt-[140px] h-[80vh] xl:h-[85vh] w-full overflow-hidden'>
            <div className='h-full w-full'>
                <video src={heroAnimation}
                    autoPlay
                    loop
                    muted
                    className='h-full w-full object-cover object-top'
                >
                </video>
            </div>
            <div className='absolute bottom-[25%] flex flex-col text-white items-center w-full text-center px-5 md:px-10 lg:px-48'>
                <h1 className=' text-[35px] md:text-[50px] font-bold'>Your Enterprise AI: <br /> Precision Better than Peers</h1>
                <h2 className='md:flex hidden text-[20px] lg:text-[40px] mt-5 font-bold'>
                    What’s your Competitive Advantage If Not Your Data :
                </h2>
                <p className='md:flex hidden text-[16px] lg:text-[30px] mt-2 font-bold'>
                    While generic AI solutions rely on broad algorithms and standard datasets, our approach integrates domain-specific fine-tuning and robust model optimization. Harness the power of bespoke machine learning, tapping into granular insights and precision, ensuring a technological edge in a competitive landscape.
                </p>
            </div>
        </div>
    )
}

export default Hero