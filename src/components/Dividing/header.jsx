import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion, transform} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown, faChevronUp, faDollar, faEur, faGbp, faLocation, faPoundSign, faUsd } from '@fortawesome/free-solid-svg-icons'
import asia from "../../assets/destination/asia.jpg"
import africa from "../../assets/destination/africa.jpg"
import europ from "../../assets/destination/europ.jpg"
import america from "../../assets/destination/america.jpg"
import DropDown from '../Utils/DropDown'
import n1 from "../../assets/travel style/n1.jpg"
import n2 from "../../assets/travel style/n2.jpg"

import n3 from "../../assets/travel style/n3.jpg"
import n4 from "../../assets/travel style/n4.jpg"
import n5 from "../../assets/travel style/n5.jpg"
import n6 from "../../assets/travel style/n6.jpg"
import n7 from "../../assets/travel style/n7.jpg"
import n8 from "../../assets/travel style/n8.jpg"


import a1 from "../../assets/about/A1.jpg"
import a2 from "../../assets/about/A2.jpg"
import a3 from "../../assets/about/A3.jpg"
import a4 from "../../assets/about/A4.jpg"
import a5 from "../../assets/about/A5.jpg"
import a6 from "../../assets/about/A6.jpg"
import a7 from "../../assets/about/A7.jpg"




const Header = () => {
    const [destinstions,setDestinations] = useState(false)
    const [travelStyle,setTravelStyle] = useState(false)
    const [about,setAbout] = useState(false)
    const [dropName , setDropName] = useState("")
    const [dropOpen , setDropOpen] = useState("")

    const [moneyDrop,setMoneyDrop]= useState(false)
    const [moneyChooce,setMoneyChooce]= useState("USD")
    const coinsArray = ["USD" , "EUR" , "GPB","AUD","CAD"]

    const [level , setLevel] = useState(0)
    const [currentCountry , setCurrentCountry] = useState("asia")
    const [previousCountry, setPreviousCountry] = useState("africa");
    const [currentStyle , setCurrentStyle] = useState("family trips")
    const [previousStyle, setPreviousStyle] = useState("Honeymoons");

    const [currentAbout , setCurrebtAbout] = useState("our story")
    const [prevAbout, setPrevAbout] = useState("careers");
    const handleDestinstion = ()=>{
        setTravelStyle(false)
        setAbout(false)
        setDestinations(!destinstions)
        setDropName("dest")
        setDropOpen(!destinstions)
    }
    const handleTravelStyle = ()=>{
        setDestinations(false)
        setAbout(false)
        setTravelStyle(!travelStyle)
        setDropName("style")
        setDropOpen(!travelStyle)

    }

    const handleAbout = ()=>{
        setDestinations(false)
        setTravelStyle(false)
        setAbout(!about)
        setDropName("about")
        setDropOpen(!about)

    }
    const handleChooseMoney = (coin)=>{
        setMoneyDrop(false)
        setMoneyChooce(coin)
    }
    useEffect(() => {
        if (dropOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [dropOpen]);
  return (
    <div className='flex items-center justify-between py-10 px-16 relative' >
        <div className='cursor-pointer relative'>
            <svg  className={`${dropOpen?"d" : "logo"}`} width="66" height="16" viewBox="0 0 66 16" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="nonzero" fill="none" >
                    <path fill="currentColor" d="M19.52 3.449h-3.027V13.53h3.027zM43.114 3.333c-.201-.031-.428-.044-.642-.044-1.822 0-3.103.77-4.024 2.314l-.713-2.075h-2.291v10.003h3.004v-5.93c.8-1.067 1.86-1.562 3.382-1.562.44 0 .9.039 1.281.098V3.333h.003zM52.91 3.333a4.34 4.34 0 00-.639-.044c-1.821 0-3.103.77-4.024 2.314l-.712-2.075h-2.292v10.003h3.004v-5.93c.801-1.067 1.86-1.562 3.382-1.562.441 0 .9.039 1.281.098V3.333z"></path><path d="M3.696 13.545c0 1.038-.828 1.882-1.848 1.882S0 14.587 0 13.545c0-1.038.826-1.882 1.848-1.882 1.02 0 1.848.844 1.848 1.882z" fill="#FC6220"></path><path fill="currentColor" d="M10.715 0v8.696L4.147 0H.42v10.103h3.001v-6.36l7.393 9.788h2.902V0zM55.254 3.766v2.37s6.819-2.254 6.819 2.096c-.968-.538-2.4-.876-3.774-.876-2.541 0-3.995 1.155-3.995 3.206 0 1.993 1.39 3.21 3.65 3.21 1.736 0 3.229-.738 4.116-2.034l.713 1.793h2.314v-5.58c.003-6.855-9.843-4.185-9.843-4.185zm3.753 7.773c-1.05 0-1.616-.4-1.616-1.095 0-.737.627-1.137 1.837-1.137.909 0 1.997.22 2.845.598-.786.897-1.895 1.634-3.066 1.634zM22.795 3.766v2.37s6.82-2.254 6.82 2.096c-.969-.538-2.402-.876-3.774-.876-2.542 0-3.996 1.155-3.996 3.206 0 1.993 1.391 3.21 3.651 3.21 1.736 0 3.228-.738 4.116-2.034l.712 1.793h2.315v-5.58c.002-6.855-9.844-4.185-9.844-4.185zm3.753 7.773c-1.05 0-1.616-.4-1.616-1.095 0-.737.627-1.137 1.838-1.137.908 0 1.996.22 2.844.598-.785.897-1.897 1.634-3.066 1.634z"></path>
                </g>
            </svg>
        </div>
        <div className='flex items-center gap-5 '>
                <motion.div onClick={handleDestinstion} initial="hidden" whileHover="visible" className={`relative flex items-center gap-1 cursor-pointer `}>
                    <a 
                    className={` ${(dropOpen) ? "text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out" : "text-white text-xs font-medium transform  transition-colors duration-1000 ease-in-out"}} `}>
                        DESTINATIONS
                    </a>
                    <FontAwesomeIcon className={`text-[8px] font-medium ${dropOpen? "text-black_color" : "text-white_color"} transform  transition-colors duration-1000 ease-in-out`} icon={destinstions ? faChevronUp : faChevronDown} />
                    
                    <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${dropOpen ? "bg-black_color" : "bg-white_color"}`}
                    variants={{
                        hidden: { width: 0 },
                        visible: { width: '100%' }
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                </motion.div>
                <motion.div onClick={handleTravelStyle}  initial="hidden" whileHover="visible" className='relative flex items-center gap-1 cursor-pointer'>
                    <motion.div
                        className={`absolute bottom-0 left-0 h-0.5 ${dropOpen ? "bg-black_color" : "bg-white_color"}`}

                        variants={{
                            hidden: { width: 0 },
                            visible: { width: '100%' }
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                        <a 
                        className={` ${dropOpen ? "text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out" : " text-xs font-medium transform text-white_color  transition-colors duration-1000 ease-in-out"}} `}>
                            TRAVEL STYLES
                        </a>

                    <FontAwesomeIcon className={`text-[8px] font-medium ${dropOpen? "text-black_color" : "text-white_color"} transform  transition-colors duration-1000 ease-in-out`} icon={travelStyle ? faChevronUp : faChevronDown} />
                    
                </motion.div>
                <motion.div onClick={handleAbout}   initial="hidden" whileHover="visible" className='relative flex items-center gap-1 cursor-pointer'>
                    <motion.div
                            className={`absolute bottom-0 left-0 h-0.5 ${dropOpen ? "bg-black_color" : "bg-white_color"}`}
                            variants={{
                                hidden: { width: 0 },
                                visible: { width: '100%' }
                            }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                        <a 
                        className={` ${(dropOpen) ? "text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out" : "text-white text-xs font-medium transform  transition-colors duration-1000 ease-in-out"}} `}>
                            ABOUT US
                        </a>

                        <FontAwesomeIcon className={`text-[8px] font-medium ${dropOpen? "text-black_color" : "text-white_color"} transform  transition-colors duration-1000 ease-in-out`} icon={about ? faChevronUp : faChevronDown} />
                        
                </motion.div>
                <motion.div initial="hidden" whileHover="visible"  className='relative flex items-center gap-1 cursor-pointer'>
                <motion.div
                            className={`absolute bottom-0 left-0 h-0.5 ${dropOpen ? "bg-black_color" : "bg-white_color"}`}
                            variants={{
                                hidden: { width: 0 },
                                visible: { width: '100%' }
                            }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                        <a 
                        className={` ${dropOpen ? "text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out" : "text-white text-xs font-medium transform  transition-colors duration-1000 ease-in-out"}} `}>
                            STORIES
                        </a>

                </motion.div>
            
        </div>
        <DropDown 
            isOpen={dropName === "dest" ? destinstions : dropName === "about" ? about : dropName ==="style"?travelStyle:""} 
            level={level} 
            setLevel={setLevel} 
            prevValue={dropName === "dest" ? previousCountry : dropName === "about" ? prevAbout : dropName ==="style"?previousStyle:""} 
            setPrevValue={dropName === "dest" ? setPreviousCountry : dropName === "about" ? setPrevAbout : dropName ==="style"?setPreviousStyle:""}
            currentValue={dropName === "dest" ? currentCountry : dropName === "about" ? currentAbout : dropName ==="style"?currentStyle:""}
            setCurrentValue={dropName === "dest" ? setCurrentCountry : dropName === "about" ? setCurrebtAbout : dropName ==="style"?setCurrentStyle:""}
            images={dropName === "dest" ? [asia,africa,europ,america] : dropName === "about" ? [a1,a2,a3,a4,a5,a6,a7]  : dropName ==="style"?[n1,n2,n3,n4,n5,n6,n7,n8]:""}
            
            values={dropName === "dest" ? ["asia","africa","europe","america"] : 
            dropName==="style" ? ["family trips","Honeymoons","Private travel","Rewilding trips","Walking safaris","Diving trips","Wildlife encounters","Bespoke expeditions"] :
            dropName === "about" ? ["our story","Why book with Niarra" , "How we work", "Sustainability","In the press","Meet the team","careers"]:""}
            locations={["tokyo , JApan","Cairo , Egypt","Paris , France","Rozario , Argentina"]}
        />
      
        <div className='flex items-center gap-10 relative'>
                <div className='absolute -left-3/4'>
                    {moneyDrop && 
                    // (<div className='flex flex-col gap-3 px-5 py-3 bg-white_color absolute  '>
                    //     <div className='flex items-center gap-1 cursor-pointer' onClick={()=>setMoneyDrop(false)}>
                    //         <a  className={`  text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out `}> $USD</a>
                    //         <FontAwesomeIcon className={`text-[8px] font-medium text-black transform  transition-colors duration-1000 ease-in-out`} icon={travelStyle ? faChevronUp : faChevronDown} />
                    //     </div>
                    //     <div className='flex items-center gap-1 cursor-pointer'>
                    //         <a  className={`  text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out `}> $ USD</a>
                    //     </div>
                    //     <div className='flex items-center gap-1 cursor-pointer'>
                    //         <a  className={`  text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out `}> $ USD</a>
                            
                    //     </div>
                    //     <div className='flex items-center gap-1 cursor-pointer'>
                    //         <a  className={`  text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out `}> $ USD</a>
                    //     </div>
                    // </div>)
                    <div className='flex flex-col gap-3 px-5 py-3 bg-white_color absolute  '>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={()=>setMoneyDrop(false)}>
                            <FontAwesomeIcon className={`text-sm font-bold text-black transform  transition-colors duration-1000 ease-in-out`} 
                            icon={moneyChooce === "USD" ? faUsd : moneyChooce==="EUR" ? faEur : moneyChooce ==="GPB"?faGbp : moneyChooce === "AUD" ? faPoundSign : faDollar} />
                            <a  className={`  text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out `}> {moneyChooce}</a>
                            <FontAwesomeIcon className={`text-[8px] font-medium text-black transform  transition-colors duration-1000 ease-in-out`} icon={moneyDrop ? faChevronUp : faChevronDown} />
                        </div>
                        {
                            coinsArray
                            .filter(coin => coin !== moneyChooce) 
                            .map((coin) => (
                                <div key={coin} value={coin} className='flex items-center gap-1 cursor-pointer' onClick={()=>handleChooseMoney(coin)}>
                                <FontAwesomeIcon className={`text-sm font-bold text-black transform  transition-colors duration-1000 ease-in-out`} 
                                icon={coin === "USD" ? faUsd : coin==="EUR" ? faEur : coin ==="GPB"?faGbp : coin === "AUD" ? faPoundSign : faDollar} />

                                    <a className='text-black text-xs font-medium transform transition-colors duration-1000 ease-in-out'>
                                        {coin}
                                    </a>
                                    
                                </div>
                            ))
                        }
                    </div>
                    }
                    <div className={`${moneyDrop ? "hidden" : ""} flex items-center gap-1 cursor-pointer`} onClick={()=>setMoneyDrop(true)}>
                        <FontAwesomeIcon className={`text-sm font-bold mr-1 ${dropOpen?'text-black_color' : 'text-white_color'} transform  transition-colors duration-1000 ease-in-out`} 
                        icon={moneyChooce === "USD" ? faUsd : moneyChooce==="EUR" ? faEur : moneyChooce ==="GPB"?faGbp : moneyChooce === "AUD" ? faPoundSign : faDollar} />

                                
                        <a  className={` ${dropOpen ? "text-black text-xs font-medium transform  transition-colors duration-1000 ease-in-out" : "text-white text-xs font-medium transform  transition-colors duration-1000 ease-in-out"}} `}> {moneyChooce}</a>
                        <FontAwesomeIcon className={`text-[8px] font-medium ${dropOpen? "text-black_color" : "text-white_color"} transform  transition-colors duration-1000 ease-in-out`} icon={faChevronDown} />
                    </div>
                </div>
                <div className='flex outline-none items-center gap-2 py-4 px-6 rounded-full cursor-pointer bg-black_color text-white_color transition-colors duration-75 hover:bg-orange_color'>
                    <svg class="enq" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="nonzero" stroke="currentColor" stroke-width=".3"><path d="M10 18.496c2.305 0 4.61-.878 6.364-2.632 3.292-3.292 3.495-8.52.612-12.051a1.517 1.517 0 001.737-1.504c0-.407-.158-.789-.446-1.076a1.512 1.512 0 00-1.076-.446 1.519 1.519 0 00-1.504 1.737c-3.531-2.883-8.76-2.68-12.05.612-3.51 3.51-3.51 9.219 0 12.728A8.972 8.972 0 0010 18.496zM16.433 1.55a1.068 1.068 0 011.516 0 1.073 1.073 0 01-1.516 1.516 1.073 1.073 0 010-1.516zM3.954 3.454A8.523 8.523 0 0110 .954c2.19 0 4.379.833 6.046 2.5 3.333 3.334 3.333 8.758 0 12.092-3.334 3.333-8.758 3.333-12.092 0-3.333-3.334-3.333-8.758 0-12.092z"></path><path d="M9.803 16.788a.22.22 0 00.07.014c.02 0 .038-.006.056-.011l.071.002c1.948 0 3.78-.759 5.157-2.136A7.245 7.245 0 0017.293 9.5c0-1.948-.759-3.78-2.136-5.157A7.245 7.245 0 0010 2.207c-1.948 0-3.78.759-5.157 2.136A7.245 7.245 0 002.707 9.5c0 1.948.759 3.78 2.136 5.157a7.24 7.24 0 004.96 2.13zM5.098 4.728l.825.825a.224.224 0 00.318 0 .225.225 0 000-.318l-.82-.82A6.786 6.786 0 019.65 2.666V3.88a.225.225 0 00.45 0V2.66a6.79 6.79 0 014.547 1.818l-.839.839a.225.225 0 10.318.318l.84-.84a6.788 6.788 0 011.87 4.377h-1.186a.225.225 0 000 .45h1.19a6.789 6.789 0 01-1.754 4.456l-.777-.777a.225.225 0 10-.318.318l.782.783A6.793 6.793 0 0110.1 16.34v-1.025a.225.225 0 00-.45 0v1.019a6.788 6.788 0 01-4.354-1.869l.745-.745a.225.225 0 10-.318-.318l-.744.744A6.79 6.79 0 013.16 9.622h1.081a.225.225 0 000-.45H3.165a6.79 6.79 0 011.933-4.444z"></path><path d="M8.235 9.605l-1.459 2.841a.225.225 0 00.303.303L10 11.25l2.92 1.5a.224.224 0 00.263-.04.225.225 0 00.04-.263l-1.458-2.84 1.626-3.169a.225.225 0 00-.303-.303L10 7.72 6.912 6.134a.224.224 0 00-.303.303l1.626 3.168zm1.662-1.432a.224.224 0 00.206 0l2.568-1.319-1.36 2.648a.225.225 0 000 .206l1.193 2.321-2.401-1.233a.224.224 0 00-.206 0l-2.4 1.233 1.191-2.321a.225.225 0 000-.206l-1.36-2.648 2.57 1.32z"></path></g></svg>
                    <dev className='text-xs font-medium'>ENQUIRE</dev>
                </div>
            </div>
    </div>
  )
}

export default Header