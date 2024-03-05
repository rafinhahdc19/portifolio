import React from 'react'
import { Link } from 'react-scroll'
import { Link as NextLink } from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav id='home' className="w-full bg-[#161616] z-50 py-6 fixed top-0 left-0 right-0">
        <div className="justify-between px-1  mx-auto w-full lg:max-w-7xl md:items-center md:flex md:px-1">
          <div className='w-full'>

            <div className="flex items-center justify-between pb-1  md:block ">

              <div className='flex w-full mb-auto mt-auto '>
                <div>
                  <Link className='flex cursor-pointer' to="homepage" offset={-130} smooth={true} duration={1000} onClick={() => setNavbar(false)}>
                    <h1 className=' text-xl pl-2'>Rafael Carvalho</h1>
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setNavbar(!navbar)}
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/[10%] ease-in-out duration-300 focus:outline-none  '
                  aria-label='Menu'
                  aria-expanded='false'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='w-10 h-10'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                
                <li className="pb-3 text-lg text-black py-3 md:px-6 text-center  border-b-2 md:border-b-0  hover:bg-white/[10%] rounded-sm   border-black   md:hover:bg-transparent">
                  <Link className='flex cursor-pointer' to="Sobre" offset={-100} smooth={true} duration={1000} onClick={() => setNavbar(!navbar)}>

                    <p className='mt-auto mb-auto md:ml-3 hover:text-[#1DDA52] ease-in-out duration-200 text-white'>Sobre</p>

                  </Link>
                </li>
                <li className="pb-3 text-lg text-black py-3 md:px-6 text-center  border-b-2 md:border-b-0  hover:bg-white/[10%] rounded-sm   border-black   md:hover:bg-transparent">
                  <Link className='flex cursor-pointer' to="Projetos" offset={-140} smooth={true} duration={1000} onClick={() => setNavbar(!navbar)}>

                    <p className='mt-auto mb-auto md:ml-3 hover:text-[#1DDA52] ease-in-out duration-200 text-white'>Projetos</p>

                  </Link>
                </li>
                <li className="pb-3 text-lg text-black py-3 md:px-6 text-center  border-b-2 md:border-b-0  hover:bg-white/[10%] rounded-sm   border-black   md:hover:bg-transparent">
                  <Link className='flex cursor-pointer' to="Contato" offset={-100} smooth={true} duration={1000} onClick={() => setNavbar(!navbar)}>

                    <p className='mt-auto mb-auto md:ml-3 hover:text-[#1DDA52] ease-in-out duration-200 text-white'>Contato</p>

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar