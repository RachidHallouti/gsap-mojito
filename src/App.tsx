import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function App() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.to(ref.current, { scale: 5 })
  }, [])
  return (
    <div className="flex-center h-[100vh]">
      <h1 ref={ref} className="text-indigo-400 font-semibold text-4xl">
        Rochdi
      </h1>
    </div>
  )
}
