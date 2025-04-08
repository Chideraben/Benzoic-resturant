import BlogCard from "./BlogCard"

const Blog =()=>{
    return(
        <div className="p-10 flex flex-col justify-center items-center gap-8">
            <div className="max-w-[400px]">
                <section className="text-[#030303] font-[600] text-3xl text-center">Blog Our Latest News</section>
                <h1 className="text-[#0A244E] font-[400] text-xs text-center ">
                    Have you ever browsed food blogs like mine 
                    and wondered how to start a food blog of your very own? 
                </h1>
            </div>
            <div>
                <BlogCard/>
            </div> 
        </div>
    )
}
export default Blog