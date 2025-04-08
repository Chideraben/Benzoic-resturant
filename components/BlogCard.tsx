"use client"

import Image from "next/image";


const BlogCard = ()=>{
    const blogs=[
        {id: 1, image: "/KungPao.svg", name: "Better Than Takeout Kung Pao Chicken" ,
         details: "This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe.",
         alt: "Image 1" 
        },
        {id: 2, image: "/Broccoli.svg", name: "The Best Sesame Soy Broccoli Salad" ,
        details: "Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties.",
        alt: "Image 2"
        },
        {id: 3, image: "/Veges.svg", name: "Better Than Takeout Kung Pao Chicken" ,
        details: "This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It’s definitely.",
        alt: "Image 3"
        }
    ]
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {
            blogs.map((blog)=>(
                <div key={blog.id} className="bg-[white] rounded-lg shadow-md ">
                    <div>
                        <img src={blog.image} alt={blog.alt}/>
                    </div>

                    <div className="p-5 mt-3">
                        <section className="flex gap-3">
                            <h1 className="text-[#DA3743] font-normal text-xs"> Design</h1>
                            <h1 className="text-[#556480] font-normal text-xs">01 October 2019</h1>
                        </section>

                        <section className="text-[#333333] font-[700] text-base mt-3">
                            {blog.name}
                        </section>

                        <section className="text-[#666666] font-[400] text-sm mt-4">
                            {blog.details}
                        </section>

                        <button className="text-[#DA3743] font-[700] text-sm mt-5">Read More</button>
       
                    </div>


                </div>
            ))
           }
            
        </div>
    )
}
export default BlogCard;