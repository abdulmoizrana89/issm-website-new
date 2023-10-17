import React, { useContext } from 'react'
import { HeaderContext } from '../../constants/variables'
import { news_blogsDetailed } from '../../constants';

const NewsBlogs = () => {
  const {
    blogID
  } = useContext(HeaderContext);
  console.log(blogID)
  return (
    <div className='bg-[#2A2A2A] mt-[125px] md:mt-[160px] mb-[20px] flex flex-col md:flex-row justify-items-center h-fit p-5 md:p-10 xl:mx-[160px] lg:mx-[110px] md:mx-[40px] mx-[15px]'>

      <div className='flex-[60%] flex flex-col justify-center'>
        <div className='mb-5 text-[20px] sm:text-[25px] lg:text-[40px] xl-text-[80px]'>
          <text>{news_blogsDetailed[blogID].title}<br /></text>
        </div>
        {news_blogsDetailed[blogID].desc.map((line, index) => {
          return (
            <div key={index} className='md:ml-5 mt-2 md:mt-5'>
              <text className='text-[12px] sm:text-[16px] lg:text-[25px] ml-2'>{line} <br /></text>

            </div>
          )
        })}
      </div>

      <div className='flex-[40%] flex flex-col items-center justify-center'>
        <ul className='  flex justify-center self-center '>

          <div className=' grid place-content-center justify-items-center grid-cols-1 gap-y-5 w-full sm:w-[60%] md:w-[80%] xl:w-[500px]'>
            {news_blogsDetailed[blogID].imgs.map((img, index) => (
              <li key={index}>
                <div className='flex mt-5 '>
                  <img src={img} alt="image" className='object-contain' />
                </div>
              </li>
            ))}
          </div>

        </ul>

        <ul className='flex justify-center self-center '>

          <div className=' grid justify-items-center grid-cols-1 gap-y-5'>
            {news_blogsDetailed[blogID].videos.map((link, index) => (
              <li key={index}>
                <div className='mt-5'>
                  <iframe
                    src={link}
                    className='w-full h-fit xl:w-[560px] xl:h-[315px]'
                    title='YouTube video player'
                    allowFullScreen />
                </div>
              </li>
            ))}
          </div>

        </ul>

      </div>

    </div>
  )
}

export default NewsBlogs