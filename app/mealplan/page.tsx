"use client";
import { useMealFilter } from "@/hooks/useMealFilter";
import CategoryFilter from "@/components/CategoryFilter";
import  MealCard  from "@/components/MealCard";
//sample meal data

const MealPlan= () =>{
   const {selectedCategory, setSelectedCategory, filteredMeals, categories} = useMealFilter()
    
    return(
        <div className="p-9 mx-auto bg-[#FAFAFA] flex justify-center">
            <div className="max-w-5xl">
                {/*Dynamic Heading */}  
                <h2 className="text-[#DA3743] text-lg font-bold">Meals</h2>
                <div className="flex justify-between items-center flex-wrap">
                    <h2 className="text-5xl font-bold w-[350px]">{selectedCategory === "All" ? "Current Menu" : `${selectedCategory}`}</h2>

                    {/*Category filter */}
                    <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </div>

                {/*Meals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredMeals.map((meal) => (
                        <MealCard key={meal.id} meal={meal} />
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                   <button className="bg-[#DA3743] p-4 rounded-full text-white">Full Menu</button>

                </div>
            </div>
           
        </div>
    )
}
export default MealPlan