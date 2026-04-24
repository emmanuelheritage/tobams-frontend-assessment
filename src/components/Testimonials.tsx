import Image from "next/image";

export function Testimonials() {
    return(
        
        <section className="flex flex-col gap-4 p-5 text-center">
            <h1 className="font-semibold text-xl">Testimonials</h1>
            <div className="flex flex-col p-3 rounded-l-lg border-l-3 border-[#ef4353] gap-4">
                <div className="flex flex-row p-2 justify-between gap-3" >
                    <Image src="/sarah_johnson.png" alt="Testimonial 1" width={50} height={50} className="rounded-full" />
                    <div className="flex flex-col text-left">
                        <h2 className="font-semibold text-lg">Sarah Johnson</h2>
                        <p className="text-sm text-gray-600">CEO of Tech Innovations Inc.</p>
                    </div>
                </div>
                <div className="text-left">
                    <p>
                        Tobams Group is a true partner in our journey to digital excellence. 
                        Their creativity and technical expertise have propelled our projects to new heights. 
                        Their work is top-notch, and the results speak for themselves. I can't recommend them enough!
                    </p>
                </div>
            </div>
            <div className="flex gap-3 justify-end">
                <button className="bg-[#f04354]/10 py-4 px-4 rounded text-bold">
                    <Image src="/reddish_left_arrow.svg" alt="Previous" width={10} height={10} />
                </button>
                <button className="bg-[#f04354]/10 py-4 px-4 rounded text-bold">
                    <Image src="/reddish_right_arrow.svg" alt="Next" width={10} height={10} />
                </button>
            </div>
        </section>
    );
}