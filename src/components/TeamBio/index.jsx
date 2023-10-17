import React, { useContext } from 'react'
import { HeaderContext } from '../../constants/variables'
import { teamData } from '../../constants';
import Events from './Events';

const TeamBio = () => {
    const {
        blogID
    } = useContext(HeaderContext);
    console.log(blogID)
    return (
        <div className='bg-[#2A2A2A] mt-[160px] mb-[20px] xl:mx-[160px] lg:mx-[110px] md:mx-[40px] mx-[15px] h-fit p-5 md:p-10 '>
            <div className=' hidden md:flex  justify-items-center h-fit '>
                <div className='flex-[40%] flex flex-col items-center'>
                    <div className='w-full h-fit  p-2'>
                        <img src={teamData[blogID].img} alt="image" className='w-full h-full object-contain' />
                    </div>
                    <div className='mt-10 lg:mt-20 bg-[#242424] p-5 w-full'>
                        <text className='text-[20px] lg:text-[30px]'>Accomplishments</text>
                        {teamData[blogID].accomplishments.map((line, index) => {
                            return (
                                <div key={index} className='ml-5 mt-5'>
                                    <text className='text-[12px] lg:text-[20px]'>{`\u2022 ${line}`} <br /></text>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex-[60%] flex flex-col p-10'>
                    <div className='mb-5 text-[50px] lg:text-[60px] xl:text-[80px]'>
                        <text>{teamData[blogID].name}</text>
                        <p className='text-[16px] lg:text-[20px] text-dimWhite'>{teamData[blogID].title}</p>
                    </div>

                    <div className='mt-5'>
                        <div className='mb-5'>
                            <text className='text-[24px] lg:text-[30px]'>Acheivements</text>

                        </div>
                        {teamData[blogID].desc.map((line, index) => {
                            return (
                                <div key={index} className='mt-2'>
                                    <text className='text-[16px] lg:text-[22px] ml-2'>{line} <br /></text>

                                </div>
                            )
                        })}
                    </div>


                </div>


            </div>

            <div className='flex md:hidden flex-col items-center'>
                <div className='flex w-full sm:w-[60%] h-fit'>
                    <img src={teamData[blogID].img} alt="image" className='object-contain' />
                </div>
                <div className='mb-5 text-[20px] sm:text-[30px]'>
                    <text>{teamData[blogID].name}</text>
                    <p className='text-[10px] text-dimWhite'>{teamData[blogID].title}</p>
                </div>
                <div className='mt-10'>
                    <text className='text-[16px] sm:text-[24px]'>Acheivements</text>
                    {teamData[blogID].desc.map((line, index) => {
                        return (
                            <div key={index} className=' mt-5'>
                                <text className='text-[12px] sm:text-[16px] ml-2'>{line} <br /></text>

                            </div>
                        )
                    })}
                </div>
                <div className='mt-14 bg-[#242424] p-5 w-full'>
                    <text className='text-[20px] sm:text-[26px]'>Accomplishments</text>
                    {teamData[blogID].accomplishments.map((line, index) => {
                        return (
                            <div key={index} className='mt-3'>
                                <text className='text-[12px] sm:text-[14px]'>{`\u2022 ${line}`} <br /></text>

                            </div>
                        )
                    })}
                </div>
            </div>
            <Events />
        </div>

    )
}

export default TeamBio