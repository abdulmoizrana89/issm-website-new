import { Link } from "react-router-dom"
import { useContext } from 'react'
import { HeaderContext } from "../../constants/variables"
import { ISSMLogowhite, close, menu } from '../../assets'
import { navLinks } from '../../constants'
import { useState } from 'react'


const Navbar = () => {

    const {
        setBlogID
    } = useContext(HeaderContext);

    const [hovering, setHovering] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [id, setID] = useState()

    return (
        <div className="z-10 top-0 fixed w-full font-poppins">
            <div className='w-full bg-[#2A2A2A]' >
                <nav className='flex py-4 xl:px-[160px] lg:px-[110px] md:px-[40px] px-[15px] justify-between items-center navbar '>
                    <Link to={'/'}>
                        <img src={ISSMLogowhite} alt="logo"
                            className='w-[100px] lg:w-[150px]'
                        />
                    </Link>

                    <ul className='list-none md:flex hidden justify-end items-center flex-1 '>

                        {navLinks.map((nav, index) => (
                            <li key={nav.link}
                                className={`font-normal cursor-pointer text-[12px] lg:text-[16px] tracking-widest ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[25px]'}`}
                                onMouseOver={() => {
                                    setHovering(true)
                                    setID(nav.link)
                                }}

                            >
                                <div className='flex place-items-center '>
                                    <a href={nav.link}
                                        className={`hover:text-[#C45508] text-white ${nav.link == "" ? 'pointer-events-none' : 'pointer-events-auto'} `}>
                                        {nav.title}
                                    </a>
                                    {/* <img src={arrowDown} alt='arrow'
                                        className={` h-[10px] ml-[8px] ${nav.subLinks.length !== 0 ? 'flex' : 'hidden'}`}

                                    /> */}
                                </div>
                                <div className={` ${hovering == true && nav.link == id && nav.subLinks.length !== 0 ? 'flex' : 'hidden'} `}>

                                    <ul className='bg-[#2A2A2A] mt-10 lg:mt-12 w-full justify-items-center p-5 xl:px-[10%] absolute left-0 z-10 grid grid-cols-4 gap-4'
                                        onMouseOut={() => setHovering(false)}
                                    >
                                        {nav.subLinks.map((link) => (
                                            <li key={nav.id}>
                                                <Link to={'/industries'}>
                                                    <div className="h-[150px] w-[200px] lg:h-[250px] lg:w-[300px]"
                                                        onClick={() => {
                                                            setBlogID(link[2])
                                                            setHovering(false)
                                                        }}
                                                    >
                                                        <img src={link[1]} alt="img" className="h-[130px] lg:h-[200px] w-full object-cover" />
                                                        <p className="text-white mt-[5px]">{link[0]}</p>
                                                    </div>
                                                </Link>

                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </li>

                        ))}
                    </ul>
                    {/* <img src={search} alt="search"
                        className='w-[16px] ml-10 md:flex hidden'
                    /> */}
                    <img src={menu} alt="menu"
                        className='w-[18px] ml-10 md:hidden flex'
                        onClick={() => setToggle((prev) => !prev)}
                    />


                </nav>

            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} h-fit max-h-[81vh] w-full relative z-10 bg-white overflow-y-scroll`}>
                <ul className='p-[40px]'>
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className='font-normal cursor-pointer text-[18px] tracking-widest'
                        >
                            <p className={`${nav.subLinks.length == 0 ? 'mb-8' : 'mb-6'}`}>{nav.title}</p>
                            <ul>
                                {nav.subLinks.map((link) => (
                                    <li key={nav.id}
                                        className={`font-light cursor-pointer text-[14px] tracking-widest '}`}>
                                        <p className='mb-5 ml-5'>{link[0]}</p>
                                    </li>
                                ))
                                }
                            </ul>
                        </li>
                    ))}
                </ul>
                <img src={close} alt="close"
                    className='h-[15px] absolute top-5 right-5'
                    onClick={() => setToggle((prev) => !prev)}
                />

            </div>
        </div>


    )
}

export default Navbar
