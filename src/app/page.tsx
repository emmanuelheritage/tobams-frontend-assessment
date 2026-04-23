import Navbar from "@/components/Navbar";
import { Whatwedo } from "@/components/Whatwedo";
import { LearningManagementSystem } from "@/components/LearningManagementSystem";
import { CorporateTrainings } from "@/components/CorporateTrainings";


export default function Home() {
  return (
      <main> 
        <Navbar />
        <Whatwedo />
        <LearningManagementSystem />
        <CorporateTrainings />
      </main>
  )
}
