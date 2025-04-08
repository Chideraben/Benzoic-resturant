const MealsData= [
    {
        id: 1, name: "Jollof Rice and Chicken", category: "Rice",  details: " Fried potato/yam chips with egg sauce or any topping of your choice", price: 1500, image: "/Jollof.svg"
    },
    {
        id: 2, name: "Swallow with Draw Soup", category: "Swallow",  details: " Fried potato/yam chips with egg sauce or any topping of your choice", price: 1000, image: "/DrawSoup.svg"
    },
    {
        id: 3, name: "Fries with Egg Sauce", category: "Fries",  details: " Fried potato/yam chips with egg sauce or any topping of your choice", price: 1500 , image: "/Fries.svg"
    },
    {
        id: 4, name: "Swallow with Egusi Soup", category: "Swallow", details: " Nicely cooked egusi soup and eba", price: 1000, image: "/Egusi.svg"
    },
    {
        id: 5, name: "Beans", category: "Beans",  details: " Fried potato/yam chips with egg sauce or any topping of your choice", price: 700, image: "/Beans.svg"
    },
    {
        id: 6, name: "Fried Rice", category: "Rice",  details: " Fried potato/yam chips with egg sauce or any topping of your choice", price: 600, image: "/FriedRice.svg"
    }
];
export default MealsData

export interface NewsProps{
    blog:{
        id: number;
        name: string;
        category: string;
        details: string;
        image: string;
    }
}

