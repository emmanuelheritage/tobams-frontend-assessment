import Image from 'next/image';

export function TrainingtheConsultant() {
    return(
        <section className="bg-[#571244]/10 p-5">
            <div>
                <h1 className="text-2xl font-semibold text-[#571244]">Training the Consultant</h1>
                <h2 className="font-semibold text-[#571244]">Maximize your Potential as a Certified Trainer:</h2>
                <p>
                    With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. 
                    Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. 
                    Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.
                </p> 
            </div>
            
            <div className='bg-[#571244] flex flex-col gap-4 p-4 text-white rounded-lg'>
                <div className=''>
                    <h2>Expert-led Learning</h2>
                    <p>
                        Gain insight from seasoned professionals in the 
                        field as they mentor you through the subtleties of business analysis.
                    </p>
                </div>
                <div>
                    <h2>Comprehensive Curriculum</h2>
                    <p>
                        Access a robust curriculum that covers fundamental 
                        principles and advanced methodologies, ensuring a well-rounded understanding
                    </p>
                </div>
                <div>
                    <h2>Interactive Workshops</h2>
                    <p>
                        Engage in hands-on workshops designed to enhance your 
                        training capabilities and provide practical insights
                    </p>
                </div>
                <div>
                    <h2>Global Recognition</h2>
                    <p>
                        You will attain a globally recognized certification, opening 
                        doors to new career opportunities and industry recognition.
                    </p>
                </div>
            </div>
            <button className="text-white font-semibold py-2 px-4 rounded-lg bg-[#571244] mt-5">
                Learn more
            </button>
        </section>
    );
}