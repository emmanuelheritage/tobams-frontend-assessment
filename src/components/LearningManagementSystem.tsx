import Image from 'next/image';

export function LearningManagementSystem() {
  return (
    <section className=' flex flex-col px-2 py-3'>
      <h1>Learning Management System</h1>
         <div>
          <Image
          src="/image.jpg"
          alt="image"
          width={600}
          height={400}
          />
        </div>
    </section>
   
  );
}