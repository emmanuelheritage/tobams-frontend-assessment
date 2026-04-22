import Image from 'next/image';

export function LearningManagementSystem() {
  return (
    <section className=' flex flex-col px-2 py-3 bg-[#571244]/10 gap-4 justify-center items-center'>
      <h1 className='text-xl font-bold text-[#571244]'>Learning Management System</h1>
         <div>
          <Image
          src="/image.jpg"
          alt="image"
          width={600}
          height={400}
          />
          <div className=' flex flex-col justify-center items-center bg-[#571244]/10'>
            <p className='text-[#151515] p-4'>
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on 
              their learning journey. From technical courses covering the latest programming languages and development 
              frameworks to soft skills training in leadership, effective communication and project management, TG Academy 
              offers a wide range of courses to cater to diverse learning needs.
               With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
            </p>
              <h2 className='text-lg font-semibold text-[#571244]'>Some of our courses include:</h2>
              <ul>
                <li>Business Analysis</li>
                <li>Design Thinking</li>
                <li>Effective Communication</li>
                <li>Entrepreneurship</li>
                <li>Career Development</li>
                <li>Business Model</li>
              </ul>
            
          </div>
        </div>
    </section>
   
  );
}