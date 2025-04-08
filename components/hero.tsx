import Image from "next/image"
import Rice from "@/public/rice.svg"
import Input_ from "postcss/lib/input"
import { BsQuestion } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
const Hero =()=>{
    return(
        <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:bg-[#ffffff] bg-[#DA3743] justify-center place-items-center min-h-[100vh] pt-[100px] p-7">
            <div className="grid gap-7">
                <section>
                    <h1 className="max-w-[600px] sm:text-[black] text-[#ffffff] sm:font-bold font-normal text-6xl">Delicious meals at your convenience</h1>
                </section>
                <section>
                    <p className="max-w-[400px] text-[#FFFFFF] sm:text-[#13254A] text-lg font-normal opacity-50">Order your meals from us and we will have it delivered at your doorstep.</p>
                </section>

                {/*Only vsible on small screen */}
                <div className="sm:hidden inline">
                    <section>
                        <h1 className="text-sm font-medium text-[#FFFFFF]">Instant Order</h1>
                    </section>
                    <section className="flex bg-[white] justify-center items-center text-[#666666] text-2xl gap-2">
                        <h1 className="text-3xl"><BiSearch/></h1>
                        <input placeholder="Search" className="bg-[white] w-full h-[40px]"/>
                    </section>
                </div>
                {/*Visible on large screen */}
                <section>
                    <button className="bg-[#DA3743] p-[18px] w-[300px] text-[#ffffff] rounded-full sm:inline hidden">Get Started</button>
                </section>
            </div>

            <div className="">
                <Image src={Rice} alt="Fried rice"/>
            </div>
        </main>
    )
}
export default Hero;