import africa from "../../../../assets/InspiringStories/africa.jpg"
import beach from "../../../../assets/InspiringStories/beach.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const InspiringStories = () => {
  return (
    <div className="flex flex-col items-center  h-[1200px] gap-5">
        <div className="flex flex-col items-center gap-1 ">
            <p className="text-base font-bold">GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE</p>
            <p className=" font-bold akaya text-5xl">Inspiring</p>
            <p className="text-3xl akaya font-light">stories</p>
        </div>
        <div className="flex items-center gap-24">
              <div className='flex flex-col w-[370px] gap-5 '>   
                  <img src={africa} className='w-[350px] h-[600px]'/>
                  <p className='w-3/4 font-medium text-4xl akaya'>How to choose a <span className='text-3xl font-thin opacity-75 akaya italic'>responsible</span> tour operator</p>
                  <p className='text-orange-500  font-bold  text-xs'>ABOUT NIARRA TRAVEL</p>
                  <div className='flex gap-3 items-center w-full cursor-pointer'>
                      <div className='w-2/3 h-[0.5px] bg-black'></div>
                      <div className='flex gap-1 items-center'><div className="text-xs font-bold"> Read Story</div> <FontAwesomeIcon  className="text-xs font-bold" icon={faChevronRight} /></div>
                  </div>
              </div>
              <div className='flex flex-col w-[370px] gap-5 translate-y-36 '>   
                  <img src={beach} className='w-[350px] h-[600px] -rotate-3 -translate-x-3'/>
                  <p className='w-3/4 font-medium text-4xl akaya'>How to choose a <span className='text-3xl font-thin opacity-75 akaya italic'>responsible</span> tour operator</p>
                  <p className='text-gray-500  font-bold  text-xs'>ABOUT NIARRA TRAVEL</p>
                  <div className='flex gap-3 items-center w-full cursor-pointer'>
                      <div className='w-2/3 h-[0.5px] bg-black'></div>
                      <div className='flex gap-1 items-center'><div className="text-xs font-bold"> Read Story</div> <FontAwesomeIcon  className="text-xs font-bold" icon={faChevronRight} /></div>
                  </div>
              </div>
              
        </div>
    </div>
  )
}

export default InspiringStories