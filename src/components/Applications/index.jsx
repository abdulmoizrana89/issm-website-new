import React, { useContext } from 'react'
import { HeaderContext } from '../../constants/variables'
import { applicationsDetailed } from '../../constants'

const Applications = () => {
  const {
    blogID
  } = useContext(HeaderContext);
  console.log(blogID)
  return (
    <div className='bg-[#2A2A2A]  mt-[160px] mb-[20px] flex flex-col justify-items-center h-fit p-5 md:p-10 xl:mx-[160px] lg:mx-[110px] md:mx-[40px] mx-[15px]'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-[65%]'>
          <text className='text-[30px] sm:text-[35px] md:text-[40px] lg:text-[60px]'>{applicationsDetailed[blogID].title}</text>
          {applicationsDetailed[blogID].desc.map((desc, index) => {
            return (
              <div key={index} className='ml-3 mt-5'>
                <text className={`text-[16px] md:text-[24px] lg:text-[30px] xl:text-[35px] ${desc.heading == "" ? 'hidden' : 'flex'} `}>{desc.heading} <br /></text>
                <text className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[25px]'>{desc.body}</text>
              </div>
            )
          })}
        </div>
        <div className='flex-[35%] flex flex-col justify-center items-center mt-5'>
          <img src={applicationsDetailed[blogID].thumbnail} alt="thumbnail"
            className='w-full h-fit sm:w-[60%] md:h-[250px] md:w-[250px] xl:w-[300px] xl:h-[300px]  object-contain md:object-cover rounded-lg'
          />
          <a href={applicationsDetailed[blogID].doc} target='_blank' rel='noreferrer'
            className='text-[10px] md:text-[16px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '>
            READ MORE
          </a>
        </div>
      </div>

      <div className='flex w-full h-fit my-5 sm:p-5'>
        <img src={applicationsDetailed[blogID].img} alt="ScreenImage" className='object-cover' />
      </div>

      <ul className='  flex justify-center self-center '>
        <div className=' grid justify-items-center justify-between grid-cols-none grid-rows-3 md:grid-cols-1 md:grid-rows-none grid-flow-col gap-5'>
          {applicationsDetailed[blogID].cards.map((item, index) => (
            <li key={index} className='w-full md:w-[250px] lg:w-[300px] xl:w-[400px] border-[1px]'>
              <div className=' w-full bg-[#2A2A2A] p-5 overflow-hidden'>
                <div className='mb-[10px]'>
                  <text className='font-bold text-lg sm:text-2xl md:text-xl lg:text-2xl'>{item.title}</text>
                </div>
                {item.desc.map((line, index) => {
                  return (
                    <div key={index} className='mt-5'>
                      <text className='ml-2 text-base sm:text-xl md:text-lg lg:text-xl text-white'>{line}</text>
                    </div>
                  )
                })}
              </div>

            </li>
          ))}

        </div>
      </ul>

    </div>

  )
}

export default Applications