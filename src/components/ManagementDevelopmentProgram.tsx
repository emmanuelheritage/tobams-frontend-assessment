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
            </div>
           
        </section>
    );
}