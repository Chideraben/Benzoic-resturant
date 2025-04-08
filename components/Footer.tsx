import Image from "next/image"
import Logo from "@/public/logo.svg"
import {  BsTwitter} from "react-icons/bs"
import { FiFacebook } from "react-icons/fi"
import { GrInstagram } from "react-icons/gr"
const Footer =()=>{
    return(
        <div className="bg-[#FAFAFA] flex flex-col justify-center items-center gap-7 py-10">
            <div className="flex flex-wrap justify-around items-start w-full">
                <div className="flex items-center gap-2">
                    <Image src={Logo} alt="logo"/>
                    <h1 className="text-[#1A1A1A] font-extrabold text-xl">Meal</h1>
                </div>

                <div className="flex gap-4">
                    <section>
                        <h1 className="font-bold text-base">Company</h1>
                        <ul>
                            <li className="text-[#666666] text-base font-normal">Blog</li>
                            <li className="text-[#666666] text-base font-normal">About Us</li>
                            <li className="text-[#666666] text-base font-normal ">Contact Us</li>
                        </ul>
                    </section>
                    <section>
                        <h1 className="font-bold text-base">Services</h1>
                        <ul>
                            <li className="text-[#666666] text-base font-normal">FAQs</li>
                            <li className="text-[#666666] text-base font-normal">Our Menu</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="border-[#B3B3B3] border-t-1 block sm:flex justify-between items-center w-[70%]">
                <section>
                    <h1 className="text-[#333333] font-normal text-xs">© 2022 Meals. All rights reserved.</h1>
                </section>
                <section className="flex gap-3 mt-2">
                    <h1 className="rounded-full bg-[#F3EEE4] text-2xl w-[40px] h-[40px] text-[#666666] flex items-center justify-center text-[#121212]"><FiFacebook/></h1>
                    <h1 className="rounded-full bg-[#F3EEE4] text-2xl w-[40px] h-[40px] text-[#666666] flex items-center justify-center text-[#121212]"><GrInstagram/></h1>
                    <h1 className="rounded-full bg-[#F3EEE4] text-2xl w-[40px] h-[40px] text-[#666666] flex items-center justify-center text-[#121212]"><BsTwitter/></h1>
                </section>
            </div>
        </div>
    )
}
export default Footer