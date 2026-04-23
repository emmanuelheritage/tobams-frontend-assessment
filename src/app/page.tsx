import Navbar from "@/components/Navbar";
import { Whatwedo } from "@/components/Whatwedo";
import { LearningManagementSystem } from "@/components/LearningManagementSystem";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { ManagementDevelopmentProgram } from "@/components/ManagementDevelopmentProgram";

export default function Home() {
  return (
      <main> 
        <Navbar />
        <Whatwedo />
        <LearningManagementSystem />
        <CorporateTrainings />
      <ManagementDevelopmentProgram />
      </main>
  )
}
