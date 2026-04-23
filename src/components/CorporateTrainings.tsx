import Image from 'next/image';

export function CorporateTrainings() {
  return (
    <section>
        <div className='gap-4 p-4 md:hidden bg-[#f9f9f9]'>

        <div className='flex flex-col gap-4 p-4 bg-white'>
            <h2 className='text-xl font-semibold'>Corporate Trainings</h2>
        <Image
          src="/5041.jpg"
          alt="Corporate Training"
          width={300}
          height={150}
          className='rounded-full object-cover'
        />
        <p>
            Empower your team with our customised Corporate Training programs designed to address 
            the unique needs and objectives of your organisation. Our expert facilitators work closely with 
            your team to deliver tailored learning experiences that align with your company's goals and values.
        </p>
        <h2 className='text-xl font-semibold'>Personalized Individual Training</h2>
        <Image
        src="/2140.jpg"
          alt="Corporate Training"
          width={300}
          height={150}
          className='rounded-full object-cover'
        />
        <p>
            Begin a journey of lifelong learning and professional development with Tobams Group's diverse 
            range of training programs for individuals. From technical skills mastery to soft skills enhancement, 
            our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals. 
        </p>
        <ul >
            <li className="flex gap-1"> 
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Leadership Development
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Soft Skills Development
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Industry Specific Knowledge
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Technical Skills Enhancement
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Time Management
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Career Development
            </li>
        </ul>
        <h2 className='text-xl font-semibold'>Capacity Development</h2>
        <Image
        src="/cd535.jpg"
          alt="Corporate Training"
          width={300}
          height={150}
          className='rounded-full object-cover'
        />
        <p>
            At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, 
            and personalized mentorship. We are committed to your success and growth. 
            We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success: 
        </p>
        <ul >
            <li className="flex gap-1"> 
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Tailored Training Programs
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Expert-Led Workshops
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Personalized Mentorship
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Technical Skills Enhancement
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Collaborative Learning Environment
            </li>
            <li className="flex gap-1">
                <Image
                src="/Lightning symbol.svg"
                alt="lightning symbol"
                width={15} height={15}
                /> Ongoing Support and Resources
            </li>
        </ul>
        </div>
    </div>
    </section>
      );
      }