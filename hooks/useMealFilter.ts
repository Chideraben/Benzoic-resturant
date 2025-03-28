"use client"
import { useState } from "react"
import MealsData from "@/data/mealData"
export const useMealFilter = () =>{
    const [selectedCategory, setSelectedCategory] = useState("All")
    //Filter meals based on selected category
    const categories = ["All", ...new Set(MealsData.map((meal) => meal.category))]

    const filteredMeals = selectedCategory === "All" 
    ? MealsData 
    : MealsData.filter((meal) => meal.category === selectedCategory);
    return{selectedCategory, setSelectedCategory, filteredMeals, categories}
}