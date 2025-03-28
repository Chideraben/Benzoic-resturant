"use client";
import { useMealFilter } from "@/hooks/useMealFilter";
import CategoryFilter from "@/components/CategoryFilter";
import  MealCard  from "@/components/MealCard";
//sample meal data

const MealPlan= () =>{
   const {selectedCategory, setSelectedCategory, filteredMeals, categories} = useMealFilter()
    
    return(
        <div className="p-6 max-w-5xl mx-auto">
            <div className="flex justify-between items-center">
                {/*Dynamic Heading */}  
                <section>
                    <h2>Meals</h2>
                    <h2 className="text-2xl font-bold">{selectedCategory === "All" ? "Current Menu" : `${selectedCategory}`}</h2>

                </section>
                                
                {/*Category filter */}

                <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            </div>

            {/*Meals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                ))}
            </div>
        </div>
    )
}
export default MealPlan