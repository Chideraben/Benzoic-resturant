import Image from "next/image";
import Navbar  from "../components/nav";
import  Hero  from "@/components/hero";
import Menu  from "./mealplan/page";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu />
      <AboutUs/>
      <Footer/>
    </div>
  );
}
