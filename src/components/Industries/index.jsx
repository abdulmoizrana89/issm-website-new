import React, { useContext } from 'react'
import { HeaderContext } from '../../constants/variables'
import { IndustriesDetailed } from '../../constants';

const Industries = () => {
    const {
        blogID
    } = useContext(HeaderContext);
    console.log(blogID)
    return (
        <>
            <div className='flex w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] mt-[100px] md:mt-[140px] relative items-center'>   
                <img src={IndustriesDetailed[blogID].img} alt='image' className='object-cover w-full h-full object-top' />
                <text className='absolute left-5 sm:left-10 md:left-20 text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] xl-text[80px] font-bold w-[70%] md:w-[50%]'>
                    {IndustriesDetailed[blogID].title}
                </text>
            </div>

            <div className='bg-[#2A2A2A] mb-[20px] flex flex-col justify-items-center h-fit p-5 md:p-10 xl:mx-[160px] lg:mx-[110px] md:mx-[40px] mx-[15px]'>

                <div className='flex flex-col md:flex-row'>
                    <div className='flex-[60%] flex flex-col justify-center'>
                        <div className='mb-5 text-[20px] sm:text-[25px] md:text-[30px]'>
                            <text>{IndustriesDetailed[blogID].subTitle}<br /></text>
                        </div>
                        {IndustriesDetailed[blogID].desc.map((line, index) => {
                            return (
                                <div key={index} className='md:ml-5 mt-2 md:mt-5'>
                                    <text className='text-[12px] sm:text-[16px] lg:text-[20px] ml-2'>{line} <br /></text>

                                </div>
                            )
                        })}
                        {IndustriesDetailed[blogID].bulletpoints.map((line, index) => {
                            return (
                                <div key={index} className='md:ml-5 mt-2 md:mt-5'>
                                    <text className='text-[12px] sm:text-[16px] lg:text-[20px] ml-2'>{`\u2022 ${line}`} <br /></text>

                                </div>
                            )
                        })}
                        <div className='md:ml-5 mt-2 md:mt-5'>
                            <text className='text-[12px] sm:text-[16px] lg:text-[20px] ml-2'>{IndustriesDetailed[blogID].desc2} <br /></text>
                        </div>

                    </div>
                    <div className='flex-[40%] md:px-10 lg:px-20 flex flex-col md:items-end'>
                        <div className='text-left'>
                            <div className='mb-5 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]'>
                                <text>Key issues Resolved:<br /></text>
                            </div>
                            {IndustriesDetailed[blogID].issues.map((line, index) => {
                                return (
                                    <div key={index} className='md:ml-3 lg:ml-5 mb-1'>
                                        <text className='text-[12px] sm:text-[14px] mg:text-[16px] lg:text-[20px]'>{`\u2022 ${line}`} <br /></text>

                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

                <div className='flex flex-col xl:flex-row mt-10 justify-between md:px-10'>
                    <div>
                        <div className={`mb-5 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] ${IndustriesDetailed[blogID].deployments.length == 0 ? 'hidden' : 'flex'} `}>
                            <text>Deployments<br /></text>
                        </div>
                        <ul className='flex justify-center self-center '>

                            <div className=' grid justify-items-center justify-between grid-flow-row sm:grid-flow-col md:grid-cols- gap-5'>

                                {IndustriesDetailed[blogID].deployments.map((item, index) => (
                                    <li key={index}>
                                        <div className='flex gap-x-2'>
                                            <div className='flex flex-col'>
                                                <text className='bg-slate-500 h-fit w-[120px] sm:w-[200px] lg:w-[300px] p-2 text-[12px] md:text-[16px] lg:text-[20px]'>{item.brief}</text>
                                                <text className=' h-fit w-[120px] sm:w-[200px] lg:w-[300px] p-2 text-[12px] md:text-[16px] lg:text-[20px]'>{item.desc}</text>
                                            </div>
                                            <div className='flex h-fit w-[100px] md:w-[160px]'>
                                                <img src={item.img} alt="image" className='object-contain' />
                                            </div>
                                        </div>

                                    </li>
                                ))}


                            </div>

                        </ul>

                    </div>

                    <div className='mt-10 xl:mt-0'>
                        <div className={`mb-5 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] ${IndustriesDetailed[blogID].news.length == 0 ? 'hidden' : 'flex'} `}>
                            <text>NewsReleases<br /></text>
                        </div>
                        <ul className='  flex justify-center self-center '>

                            <div className=' grid justify-items-center justify-between grid-flow-row sm:grid-flow-col grid-ows-1 gap-5'>

                                {IndustriesDetailed[blogID].news.map((item, index) => (
                                    <li key={index}>
                                        <div className='flex flex-col gap-x-2'>
                                            <div className='flex h-[100px] w-full md:h-[200px] md:w-[300px]'>
                                                <img src={item.img} alt="image" className='object-cover' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <text className='bg-slate-500 h-fit w-full  lg:h-[100px] md:w-[300px] p-2 text-[12px] md:text-[16px] lg:text-[20px] text-ellipsis line-clamp-3'>{item.title}</text>
                                            </div>

                                        </div>

                                    </li>
                                ))}


                            </div>

                        </ul>
                    </div>

                </div>


            </div>
        </>

    )
}

export default Industries