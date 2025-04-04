"use client";

interface MealProps{
    meal:{
        id: number;
        name: string;
        category: string;
        details: string;
        price?: number;
        image: string;
    }
}
const MealCard = ({meal} : MealProps)=>{
    return(
        <div className="bg-[white] rounded-lg shadow-md">
            <section>
                <img src={meal.image} alt={meal.name} className="w-full object-cover rounded-lg" />
            </section>
            <section className="flex flex-col gap-2 p-2">
                <h3 className="text-xl font-bold ">{meal.name}</h3>
                <p className="font-normal text-sm h-[40px] text-[#999999]">{meal.details}</p>
                <p className="text-[#999999] font-medium text-2xl text-[#666666]">₦{meal.price}</p>
            </section>
            
        </div>
    )
}
export default MealCard;