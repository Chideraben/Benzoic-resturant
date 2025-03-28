"use client";
interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}
 const CategoryFilter = ({categories, selectedCategory, setSelectedCategory}: CategoryFilterProps)=> {
    return(
        <div className="flex justify-center gap-2 mb-6">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-[white] ${
                        selectedCategory === category ? "bg-red-600" : "bg-gray-500"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
export default CategoryFilter;