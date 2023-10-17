import React from 'react'
import { ISSMLogowhite, facebook } from '../../assets'
import { footerData } from '../../constants'

const Footer = () => {
    return (
        <>
            <div className='w-full md:h-[400px] bg-[#2A2A2A] flex py-10 xl:px-[160px] lg:px-[110px] md:px-[40px] px-[15px] justify-between items-center'>
                <div className='flex-1 md:flex-[30%]'>
                    <img src={ISSMLogowhite} alt="logo"
                        className='w-[100px] lg:w-[150px]'
                    />
                </div>

                <div className='hidden md:flex flex-[70%] gap-x-10 h-full '>

                    <div className='flex-[50%] text-[14px] lg:text-[16px] xl:text-[20px]'>
                        <text>{footerData.desc}</text>
                    </div>

                    <div className='flex-[25%] flex flex-col justify-between'>
                        <div className='h-fit'>
                            <text className='lg:text-[24px] mb-1'>{footerData.sections.visitUs.title}</text>
                            <br />
                            {footerData.sections.visitUs.body.map((line, index) => {
                                return (
                                    <text className='text-[12px] lg:text-[16px]' key={index}>{line} <br /></text>


                                )

                            })}
                        </div>
                        <div className=' h-fit'>
                            <text className='lg:text-[24px] mb-1'>{footerData.sections.timing.title}</text>
                            <br />
                            {footerData.sections.timing.body.map((line, index) => {
                                return (
                                    <text className='text-[12px] lg:text-[16px]' key={index}>{line} <br /></text>

                                )

                            })}
                        </div>
                    </div>

                    <div className='flex-[25%] flex flex-col justify-between'>
                        <div className='h-fit'>
                            <text className='lg:text-[24px] mb-1' >{footerData.sections.joinUs.title}</text>
                            <br />
                            <text className='text-[12px] lg:text-[16px]'>{footerData.sections.joinUs.body}</text>
                        </div>
                        <div className='h-fit'>
                            <text className='lg:text-[24px] mb-1'>{footerData.sections.contactUs.title}</text>
                            <div className='flex gap-x-5 mt-3'>
                                {footerData.sections.contactUs.body.map((icon, index) => {
                                    return (
                                        <div key={index} className='h-[40px] w-[40px]'>
                                            <img src={icon} alt="icon" className='object-contain' />
                                        </div>

                                    )

                                })}
                            </div>

                        </div>
                    </div>

                </div>


                <div className='flex md:hidden flex-col justify-center self-end mr-[5%]'>
                    <text>{footerData.sections.contactUs.title}</text>
                    <ul className=' flex-1 justify-center self-center '>

                        <div className=' grid justify-items-center grid-cols-4 grid-rows-1 gap-[5px]'>
                            {footerData.sections.contactUs.body.map((icon, index) => (
                                <li key={index}>
                                    <div className='h-[20px] w-[20px]'>
                                        <img src={icon} alt="icon" className='object-contain' />
                                    </div>
                                </li>
                            ))}
                        </div>

                    </ul>
                </div>


            </div >

            <div className='mx-[3%] border-t-2 pb-10 pt-2 text-center'>
                <text>ISSM.ai®  All Rights Reserved</text>
            </div>
        </>

    )
}

export default Footer