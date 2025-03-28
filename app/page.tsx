import Image from "next/image";
import Navbar  from "../components/nav";
import  Hero  from "@/components/hero";
import Menu  from "./mealplan/page";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu />
    </div>
  );
}
