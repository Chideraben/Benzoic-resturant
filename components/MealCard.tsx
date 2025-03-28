"use client";
import Image from "next/image";

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
        <div className="bg-[white] p-4 rounded-lg shadow-md">
            <img src={meal.image} alt={meal.name} className="w-full object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{meal.name}</h3>
            <p>{meal.details}</p>
            <p className="text-gray-700">₦{meal.price}</p>
        </div>
    )
}
export default MealCard;