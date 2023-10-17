import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../constants/variables'
import { ahsanEvents, asharEvents } from '../../constants'
import Card from './Card'

const Events = () => {
    const {
        blogID,
        setBlogID
    } = useContext(HeaderContext);

    const [events, setEvents] = useState(blogID == 0 ? ahsanEvents : asharEvents)

    return (
        <div id='NewsBlogs' className='flex flex-col items-center mt-32 px-[5%]'>
            <div className='md:px-10 lg:px-28'>
                <h1 className='text-white text-[20px] md:text-[28px] lg:text-[35px] mb-3'>Events</h1>

            </div>

            <div className='flex flex-col items-center mt-1'>
                <ul className='flex justify-center w-full '>
                    <div className=' grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 grid-rows-none  gap-[5px] md:gap-[30px] '>
                        {events.map((index) => (
                            <Link key={index.title} to={'/newsBlogs'}>
                                <li
                                    onClick={() => setBlogID(index.id)}>
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

export default Events