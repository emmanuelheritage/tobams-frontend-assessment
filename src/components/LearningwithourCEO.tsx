import Image from 'next/image';

export function LearningwithourCEO(){
    return(
        <section className="bg-white p-5">
            <div className="bg-[#EF4353]/20 p-2">
                <div>
                    <p>Learning with our CEO</p>
                    <h1 className=" italic text-[#571244]">Transformation Hub with Jite Newton</h1>
                    <p>Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. 
                        Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable 
                        insights and strategies for personal and professional growth. Whether you're seeking to advance your career or 
                        enhance your leadership skills, 
                        the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success 
                        in your endeavours.
                    </p>
                </div>
                <Image 
                    src="/2151.jpg"
                    width={300}
                    height={150}
                    alt="Management Development Program"
                    /> 
                    <div className="flex flex-col gap-3 p-4 bg-[#FFFFFF]/30">
                        <div className="flex gap-3 bg-white px-6 py-3 text-center">
                            <Image
                            src="/grey_lightning.svg"
                            alt="lightning symbol"
                            width={18} height={18}
                            />
                            Strategic Career Guidance
                        </div>
                        <div className="flex gap-3 bg-white px-6 py-3">
                            <Image
                                src="/grey_lightning.svg"
                                alt="lightning symbol"
                                width={18} height={18}
                                />
                            Leadership Development
                        </div>
                        <div className="flex gap-3 bg-white px-6 py-3">
                            <Image
                            src="/grey_lightning.svg"
                            alt="lightning symbol"
                            width={18} height={18}
                            />
                            CV Development
                        </div>
                        <div className="flex gap-3 bg-white px-6 py-3">
                            <Image
                            src="/grey_lightning.svg"
                            alt="lightning symbol"
                            width={18} height={18}
                            />
                            Sustainability Leadership
                        </div>
                        <div className="flex gap-3 bg-white px-6 py-3">
                            <Image
                            src="/grey_lightning.svg"
                            alt="lightning symbol"
                            width={18} height={18}
                            />
                            Communication Skills
                        </div>
                        <div className="flex gap-3 bg-white px-6 py-3">
                            <Image
                            src="/grey_lightning.svg"
                            alt="lightning symbol"
                            width={18} height={18}
                            />
                            Business Model
                        </div>

                        <button className='bg-[#571244] px-1 py-1 inline-block'>
                            Learn more
                        </button>
                    </div>
            </div>
        </section>
    );
}