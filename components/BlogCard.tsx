import { NewsProps } from "@/data/mealData";
const MealCard = ({blog} : NewsProps)=>{
    return(
        <div className="bg-[white] rounded-lg shadow-md">
            <section>
                <img src={blog.image} alt={blog.name} className="w-full object-cover rounded-lg" />
            </section>
            <section className="flex flex-col gap-2 p-2">
                <h3 className="text-xl font-bold ">{blog.name}</h3>
                <p className="font-normal text-sm h-[40px] text-[#999999]">{blog.details}</p>
            </section>
            
        </div>
    )
}
export default MealCard;