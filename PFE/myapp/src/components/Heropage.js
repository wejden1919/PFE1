import Header from "./Header"
import style from "@/app/styles/heropage.module.css";
import { Hero_content } from "./Hero_content";


const Heropage = () => {
  return (
    <>
    <section className={style.hero_page}>
    
    <Hero_content/>
    
    </section>
    </>
  )
}

export default Heropage