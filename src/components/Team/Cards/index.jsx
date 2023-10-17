import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../../constants/variables'

const Card = ({ img, title, brief, name, id }) => {
    const {
        setBlogID
    } = useContext(HeaderContext);
    return (
        <div className='flex flex-col items-center lg:flex-row md:max-w-[310px] lg:max-w-full overflow-hidden'>

            <div className='h-[70%] w-[70%] lg:h-full lg:w-full xl:h-[80%] xl:w-[80%] overflow-hidden flex justify-center'>
                <img src={img} alt={img} className='object-cover h-full w-full' />
            </div>

            <div className=' w-full p-5 overflow-hidden lg:flex lg:flex-col lg:justify-between'>
                <div className='mb-[10px] h-[50px] lg:hidden'>
                    <h3 className=' font-semibold text-lg sm:text-2xl md:text-lg lg:text-[50px] text-white text-ellipsis line-clamp-2 '>{name}</h3>
                    <p className='text-xs sm:text-base md:text-xs text-gray-500 font-bold text-ellipsis line-clamp-1'>{title}</p>
                </div>
                <div className='h-fit md:h-[165px] mb-[10px] sm:mb-[15px] lg:hidden'>
                    <p className='text-base sm:text-xl md:text-base text-white'>{brief}</p>
                </div>
                <div className='flex flex-row-reverse lg:hidden'>
                    <Link to={'/teamBio'}>
                        <text className='text-[10px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '
                            onClick={() => setBlogID(id)}
                        >
                            READ FULL BIO
                        </text>
                    </Link>
                </div>

                {/* There was some issue while styling for large screen this section is used to solve that for now */}
                <div className='lg:flex flex-col hidden'>
                    <h3 className=' font-semibold text-[50px] xl:text-[70px] text-white'>{name}</h3>
                    <p className='text-lg lg:text-xl text-gray-500 font-bold text-ellipsis line-clamp-1'>{title}</p>
                    <p className='text-[25px] xl:text-[30px] text-white mt-10'>{brief}</p>
                </div>

                <div className='flex-row-reverse lg:flex hidden'>
                    <Link to={'/teamBio'}>
                        <text className='text-[20px] xl:text-[25px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '
                            onClick={() => setBlogID(id)}
                        >
                            READ FULL BIO
                        </text>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Card