import Navbar from "@/components/Navbar";
import { Whatwedo } from "@/components/Whatwedo";
import { LearningManagementSystem } from "@/components/LearningManagementSystem";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { ManagementDevelopmentProgram } from "@/components/ManagementDevelopmentProgram";
import { LearningwithourCEO } from "@/components/LearningwithourCEO";
import { TrainingtheConsultant } from "@/components/TrainingtheConsultant";
import { BookaConsultant } from "@/components/BookaConsultant";
import { Testimonials } from "@/components/Testimonials";
import { Readytobeapart } from "@/components/Readytobeapart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main> 
        <Navbar />
        <Whatwedo />
        <LearningManagementSystem />
        <CorporateTrainings />
      <ManagementDevelopmentProgram />
      <LearningwithourCEO />
      <TrainingtheConsultant />
      <BookaConsultant />
      <Testimonials />
      <Readytobeapart />
      <Footer />
      </main>
  )
}
