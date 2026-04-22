import Navbar from "@/components/Navbar";
import { Whatwedo } from "@/components/Whatwedo";
import { LearningManagementSystem } from "@/components/LearningManagementSystem";

export default function Home() {
  return (
      <main> 
        <Navbar />
        <Whatwedo />
        <LearningManagementSystem />
      </main>
  )
}
