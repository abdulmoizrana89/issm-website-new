import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../../constants/variables'
import { news_blogsData } from '../../../constants'
import Card from './Cards'

const NewsBlogs = () => {
    const {
        setBlogID
    } = useContext(HeaderContext);
    return (
        <div id='NewsBlogs' className='flex flex-col items-center mt-32 px-[5%]'>
            <div className='text-center md:px-10 lg:px-28'>
                <h1 className='text-white text-[24px] md:text-[32px] lg:text-[48px] mb-3'>News and Blogs</h1>

            </div>

            <div className='flex flex-col items-center mt-10'>
                <ul className='flex justify-center w-full '>
                    <div className=' grid justify-items-center grid-cols-1 grid-rows-15 sm:grid-cols-2 sm:grid-rows-8 md:grid-cols-3 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-3  gap-[5px] md:gap-x-[30px] '>
                        {news_blogsData.map((index) => (
                            <Link key={index.title} to={'/newsBlogs'}>
                                <li className='mb-[30px]'
                                    onClick={()=>setBlogID(index.id)}>
                                    <Card {...index} />
                                </li>
                            </Link>

                        ))}
                    </div>

                </ul>
            </div>

        </div>

    )
}

export default NewsBlogs