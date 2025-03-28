"use client";
import {useState} from "react"
import CategoryFilter from "@/components/CategoryFilter";
import  MealCard  from "@/components/MealCard";
//sample meal data

const meals= [
    {
        id: 1, name: "Jollof Rice and Chicken", category: "Rice",  details: " Swallow", price: 1500, image: "/Jollof.svg"
    },
    {
        id: 2, name: "Swallow with Draw Soup", category: "Swallow",  details: " Swallow", price: 1000, image: "/DrawSoup.svg"
    },
    {
        id: 3, name: "Fries with Egg Sauce", category: "Fries",  details: " Swallow", price: 1500, image: "/Fries.svg"
    },
    {
        id: 4, name: "Swallow with Egusi Soup", category: "Swallow", details: " Swallow", price: 1000, image: "/Egusi.svg"
    },
    {
        id: 5, name: "Beans", category: "Beans",  details: " Swallow", price: 700, image: "/Beans.svg"
    },
    {
        id: 6, name: "Fried Rice", category: "Rice",  details: " Swallow", price: 600, image: "/FriedRice.svg"
    }
];

const categories = ["All", ...new Set(meals.map((meal) => meal.category))]

const Menu = () =>{
    const [selectedCategory, setSelectedCategory] = useState("All")
    //Filter meals based on selected category
    const filteredMeals = selectedCategory === "All" ? meals : meals.filter((meal) => meal.category === selectedCategory);
    
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
export default Menu