import Image from 'next/image';

export function ManagementDevelopmentProgram() {
    return(
        <section className="gap-4 p-4 md:hidden bg-[#f9f9f9]">
            <div className="bg-[#571244] gap-4 p-4 text-white" >
                <h2 className="text-xl font-semibold">Management Development Program</h2>
                <Image 
            src="/72488.jpg"
            width={300}
            height={150}
            className='rounded-full object-cover'
            alt="Management Development Program"
            /> 
            <div className='flex flex-col gap-5'>
                <p>
                    Tobams Group offers a comprehensive Management
                    Development Program designed to equip corporate
                    organisations with the high
                    -performing leaders they need to
                    thrive.
                </p>
                <p>
                    Our program includes workshops, seminars, coaching
                    sessions, online courses, and experiential learning
                    opportunities designed to improve leadership, strategic
                    thinking, communication, and other essential managerial
                    competencies for corporate organisations.
                </p>
            </div>
            <div className='text-white flex flex-col gap-5 mt-8'>
                <div className='rounded-lg bg-[#8F6182] px-5 py-3 flex gap-3'>
                    <Image
                        src="/white_lightning.svg"
                        alt="lightning symbol"
                        width={18} height={18}
                        /> Enhanced Leadership Skills
                </div>
                <div className='rounded-lg bg-[#8F6182] px-5 py-3 flex gap-3'>
                    <Image
                        src="/white_lightning.svg"
                        alt="lightning symbol"
                        width={18} height={18}
                        /> Improved Employee Management
                </div>
                <div className='rounded-lg bg-[#8F6182] px-5 py-3 flex gap-3'>
                    <Image
                        src="/white_lightning.svg"
                        alt="lightning symbol"
                        width={18} height={18}
                        /> Stronger Organizational Culture
                </div>
                <div className='rounded-lg bg-[#8F6182] px-5 py-3 flex gap-3'>
                    <Image
                        src="/white_lightning.svg"
                        alt="lightning symbol"
                        width={18} height={18}
                        /> Sustainable Growth
                </div>
            </div>
            </div>
           
        </section>
    );
}