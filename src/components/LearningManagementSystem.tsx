import Image from 'next/image';

export function LearningManagementSystem() {
  return (
    <section className=' flex flex-col px-2 py-3 bg-[#571244]/10 gap-4 justify-center items-center md:hidden'>
      <h1 className='text-xl font-bold text-[#571244]'>Learning Management System</h1>
            <Image
          src="/image.jpg"
          alt="image"
          width={300}
          height={150}
          className='rounded-full object-cover'
          />
         <div>
          <div className=' flex flex-col px-4 py-8 items-start bg-[#571244]/10 mt-5'>
            <p className='text-[#151515] '>
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on 
              their learning journey. From technical courses covering the latest programming languages and development 
              frameworks to soft skills training in leadership, effective communication and project management, TG Academy 
              offers a wide range of courses to cater to diverse learning needs.
               With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
            </p>
            <div>
              <h2 className='text-lg text-left font-semibold text-[#571244]'>Some of our courses include:</h2>
              <ul className='list-disc list-inside ml-3 '>
                <li>Business Analysis</li>
                <li>Design Thinking</li>
                <li>Effective Communication</li>
                <li>Entrepreneurship</li>
                <li>Career Development</li>
                <li>Business Model</li>
              </ul>
            </div>

              <button className='px-4 py-2 bg-[#571244] rounded-lg text-white mt-8'>
                <a href="http://">Learn more</a>
              </button>
            
          </div>
        </div>
    </section>
   
  );
}