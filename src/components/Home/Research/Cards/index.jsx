import React, { useContext } from 'react'
import { HeaderContext } from '../../../../constants/variables'

const Card = ({ img, title, desc, id, skill, category, link }) => (
    <div className='flex flex-col   md:max-w-[310px] rounded-tl-[100px] overflow-hidden'>

        <div className=' max-h-[200px] md:h-[200px] w-full overflow-hidden relative'>
            <img src={img} alt={img} className='sm:object-cover sm:h-full sm:w-full object-top' />
            <text className='absolute bottom-0 left-0 text-[80px] text-[#242424] font-mono font-extrabold -rotate-90'>{id}</text>
        </div>

        <div className=' w-full p-5 overflow-hidden '>
            <div className='mb-[10px] h-[50px]'>
                <h3 className='font-semibold text-lg sm:text-2xl md:text-lg text-white text-ellipsis line-clamp-2 mb-2'>{title}</h3>

            </div>
            <div className='h-[70px] sm:h-[90px] mb-[30px] sm:mb-[15px]'>
                <p className='text-base sm:text-xl md:text-base text-white text-ellipsis line-clamp-3'>{desc}</p>
                <p className='text-xs sm:text-base md:text-xs text-gray-500 font-bold text-ellipsis line-clamp-1 mt-2'>{skill}</p>
                <p className='text-xs sm:text-base md:text-xs text-gray-600 font-bold text-ellipsis line-clamp-1'>{category}</p>
            </div>
            {/* <div className='h-[70px] sm:h-[90px] mb-[30px] sm:mb-[15px]'>
                
            </div> */}
            {/* <div className='h-[70px] sm:h-[90px] mb-[30px] sm:mb-[15px]'>
                <p className='text-base sm:text-xl md:text-base text-white text-ellipsis line-clamp-3'>{desc}</p>
            </div> */}
            <div className='flex flex-row-reverse'>
                <a href={link} id='box-h-2' target='_blank'
                    className='text-[10px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '
                >
                    READ MORE
                </a>
            </div>
        </div>

    </div>
)
export default Card