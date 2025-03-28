'use client'
import { useState } from "react"
import { BiBookAlt, BiBookOpen, BiCart, BiMenu, BiSearch } from "react-icons/bi"
import { MdNoEncryption } from "react-icons/md"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import Link from "next/link"
import { CgClose } from "react-icons/cg"
import { HiHome } from "react-icons/hi2"
import { FaPlaneSlash } from "react-icons/fa6"
export const Navbar =()=>{
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <nav className="flex justify-around items-center fixed w-[100%] h-[80px] bg-[#FFFFFF] shadow-lg shadow-[#18274B14]">
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="logo"/>
                <h1 className="text-[#1A1A1A] font-extrabold text-xl">Meal</h1>
            </div>
             
            <div>
                <ul className="sm:flex hidden w-[300px] justify-around flex font-normal text-base hover:text-[#DA3743] text-[#666666]">
                    <li className="hover:border-b-2 hover:border-b-[#DA3743]">Home</li>
                    <li className="hover:border-b-2 hover:border-b-[#DA3743]">Menu</li>
                    <li className="hover:border-b-2 hover:border-b-[#DA3743]">About</li>
                </ul>
            </div>

            <div className="flex gap-5 text-[#666666] text-2xl sm:flex hidden">
                <BiSearch/>
                <BiCart/>
            </div>

            <div className="sm:flex sm:items-center space-x-4 hidden ">
                <Link href={'/menu'} >Sign In</Link>
                <button className="bg-[#DA3743] p-4 rounded-full text-white">Create Account</button>
            </div>
            
            {/*Mobile toggle switch */}
            <div className="flex justify-center gap-4 text-[#666666] ">
                <button className="sm:hidden text-4xl ">
                <BiCart/>
            </button>
            <button onClick={()=> setIsOpen(!isOpen)} className="text-4xl z-90 sm:hidden">
                {isOpen ? <CgClose/> :<BiMenu/>}
            </button>
            </div>
            
            {/*Moble View*/}
            {isOpen && (
                <div className="absolute grid bg-[#FFFFFF] w-full h-full py-100 sm:hidden">
                    <div className="flex w-full gap-4">
                        <button className="border-2 p-3  rounded-full border-[#DA3743] hover:bg-[#DA3743] hover:text-white">Create Account</button>
                        <button className="border-2 p-3 rounded-full  border-[#DA3743] hover:bg-[#DA3743] hover:text-white">Sign In</button>
                        
                    </div>
                    <div>
                        <Link  href='' className="flex items-center hover:text-[#666666] gap-5 p-5"><HiHome/> Home</Link>
                        <Link  href='' className="flex items-center hover:text-[#666666] gap-5 p-5"><BiMenu/> Menu</Link>
                        <Link  href='' className="flex items-center hover:text-[#666666] gap-5 p-5"><BiCart/> My Tray</Link>
                        <Link  href='' className="flex items-center hover:text-[#666666] gap-5 p-5"><BiBookAlt/> Meal Plans</Link>
                    </div> 
                    
                </div>
            )}
        </nav>

    )
}