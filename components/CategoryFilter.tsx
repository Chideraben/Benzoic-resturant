"use client";
interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}
 const CategoryFilter = ({categories, selectedCategory, setSelectedCategory}: CategoryFilterProps)=> {
    return(
        <div className="flex justify-center gap-1 mb-6">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-[white] border-1 border-[gray] ${
                        selectedCategory === category ? "bg-red-600 text-white" : " text-black hover:bg-gray-300"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
export default CategoryFilter;