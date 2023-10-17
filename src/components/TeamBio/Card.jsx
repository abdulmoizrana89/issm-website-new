import React, { useContext } from 'react'

const Card = ({ img, title }) => {

    return (

        <div className='flex flex-col bg-[#242424] items-center py-5 h-[250px] w-[250px]' >

            <div className='flex h-[150px] w-[150px] '>
                <img src={img} alt={img} className='object-cover' />

            </div>

            <div className=' w-full overflow-hidden '>
                <div className='line-clamp-2 text-ellipsis text-center'>
                    <h3 className='font-semibold text-lg  text-white '>{title}</h3>

                </div>
            </div>

        </div>

    )
}
export default Card