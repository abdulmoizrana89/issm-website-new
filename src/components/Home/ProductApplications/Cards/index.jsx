import React from 'react'

const Card = ({ img, title, desc, pdf }) => {

    return (
        <div className='flex flex-col   md:max-w-[310px]'>

            <div className=' max-h-[200px] md:h-[200px] w-full bg-[#2A2A2A] overflow-hidden'>
                <img src={img} alt={img} className='sm:object-cover sm:h-full sm:w-full object-top' />

            </div>

            <div className=' w-full bg-[#2A2A2A] p-5 overflow-hidden '>
                <div className='mb-[10px]'>
                    <h3 className='font-semibold text-lg sm:text-2xl md:text-lg text-white text-ellipsis line-clamp-2 mb-2'>{title}</h3>

                </div>
                <div className='h-[70px] sm:h-[90px] mb-[30px] sm:mb-[15px]'>
                    <p className='text-base sm:text-xl md:text-base text-white text-ellipsis line-clamp-3'>{desc}</p>
                </div>
                <div className='flex flex-row-reverse'>
                    <a href={pdf} target='_blank' rel='noreferrer'>
                        <text
                            className='text-[10px] font-bold text-white cursor-pointer hover:text-[#C45508] border-b-[1px] hover:border-none '
                        >
                            READ MORE
                        </text>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card