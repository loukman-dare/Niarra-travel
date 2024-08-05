import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#283a2c] flex flex-col text-white'>
        <div className='h-96 flex flex-col items-center gap-7 justify-center'>
            <div className='text-[#b1b886]'>AS SEEN AS</div>
            <div className='flex flex-wrap gap-x-0 gap-y-10 justify-center items-center'>
                <div className='w-1/2 md:w-1/3 flex justify-center'>
                    <img src='https://www.niarratravel.com/content/images/afar.png' />
                </div>
                <div className='w-1/2 md:w-1/3 flex justify-center'>
                    <img src='https://www.niarratravel.com/content/images/forbes.png' />
                </div>
                <div className='w-1/2 md:w-1/3  flex justify-center'>
                    <img src='https://www.niarratravel.com/content/images/bloomberg.png' />
                </div>
                <div className='w-1/2 md:w-1/3 flex justify-center'>
                 <img src='https://www.niarratravel.com/content/images/robb-report.png' />
                </div>
            </div>
        </div>
        <div className='w-full h-[0.5px] bg-white'></div>
        <div className='flex p-24  justify-center flex-wrap flex-col md:flex-row  gap-36 md:gap-0'>
            <div className='flex-col flex  md:w-1/2 lg:w-1/4 h-[220px] justify-between '>
                <div className='text-[#b1b886] text-lg lg:text-sm  '>DESTINATIONS</div>
                <div>
                    <p className='akaya text-5xl md:text-3xl'>Africa</p>
                    <p className='akaya text-5xl md:text-3xl'>Asia</p>
                    <p className='akaya text-5xl md:text-3xl'>Australasia</p>
                    <p className='akaya text-5xl md:text-3xl'>Europe</p>
                    <p className='akaya text-5xl md:text-3xl'>Latin America</p>
                </div>
            </div>
            <div className='flex flex-col w-full  md:w-1/2 lg:w-1/4 h-[220px] justify-between '>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#b1b886] text-xl lg:text-sm'>CALL US</p>
                    <p className='text-2xl lg:text-xl'>+1 (833) 215 9353</p>
                </div>
                <div className='flex flex-col gap-4'    >
                    <p className='text-[#b1b886] text-xl lg:text-sm'>E-MAIL US</p>
                    <p className='text-2xl lg:text-xl '>explore@niarratravel.com</p>
                </div>
                
            </div>
            <div  className='flex flex-col w-[200px] md:w-1/2 lg:w-1/4 items-center h-[270px] justify-between m-auto md:m-0'>
                <div className='flex gap-1 p-1 bg-white w-fit text-black items-center border-green-500 border-2'>
                    <div>Review us on </div>
                    <FontAwesomeIcon icon={faStar} className='text-green-500 fill-green-500'/>
                    <p>Trustpolit</p>
                </div>
                <div className='flex gap-7'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='flex justify-between'>
                    <img className='w-16 h-16' src='https://www.niarratravel.com/content/images/footer/logo/The-Long-Run-logo.png' />
                    <img className='w-16 h-16' src='https://www.niarratravel.com/content/images/footer/logo/CTF-SQUARE-WHITE.png' />
                </div>
             
            </div>
            <div className='flex flex-col-reverse md:flex-row  w-full lg:w-3/4 items-start md:items-center h-[100px] justify-between gap-10 md:gap-0'>
                <p className='text-lg lg:text-xs'>Niarra Travel</p>
                <div className='flex gap-4 lg:gap-2  items-center  md:text-base '>
                    <a>Carrers</a>
                    <a>Terms</a>
                    <a>Cookie policy</a>
                    <a>Privacy policy</a>
                </div>
                <div className='w-full lg:w-2/6 text-center'>
                A proud Travel Partner of The Long Run and The Conscious Travel Foundation
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Footer