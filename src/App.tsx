import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function App() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.to(ref.current, { scale: 5, opacity: 1, y: -100 })
  }, [])
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}
