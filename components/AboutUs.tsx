import Avater from "@/public/avater.svg"
import RedIcon from "@/public/Icon.svg"
import Image from "next/image"
const AboutUs = ()=>{
    return(
        <div className="bg-[#DA374326] flex flex-wrap justify-center gap-5 p-5 items-center">
            <div className="w-[400px] md:w-[300px] ">
                <h1 className="text-[#363A40] font-bold text-4xl mb-5">What our customers say about us</h1>
                <h1 className="text-[#67758D] font-normal text-base">At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                    blanditiis praesentium voluptatum.
                </h1>
            </div>

            <div className="bg-[#FFFFFF] w-[600px] p-10 flex items-center justify-center gap-9 rounded-lg ">
                <div className="flex flex-wrap gap-3">
                    <section>
                        <Image src={Avater} alt="avater"/>
                    </section>
                    <section>
                        <h1 className="text-2xl font-bold text-[#363A40] text-center">John Samson</h1>
                        <h1 className="text-[#67758D] font-bold text-xs mt-3">Enugu, Nigeria</h1>
                    </section>
                </div>

                <div>
                    <section className="w-full flex justify-end">
                       <Image src={RedIcon} alt="icon"/>
                    </section>
                    <h1 className="text-lg font-normal text-[#67758D]">White dwarf a still more glorious dawn awaits tingling of the spine 
                        emerged into consciousness Vangelis shores of the cosmic ocean. 
                        Tendrils of gossamer clouds kindling the energy hidden in matter concept
                        of the number one permanence.
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default AboutUs