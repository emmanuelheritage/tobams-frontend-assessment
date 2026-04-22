import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed z-100">
      {/* Navbar for mobile */}
      <div className='flex px-5.5 pt-4 pb-4 flex-row gap-2 justify-between z-10 items-center w-100 bg-[#f9f9f9] md:hidden'>
        <div className='logo'>
          <Image src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png" alt="Logo" width={100} height={50} />
        </div>
        <div>
          <button aria-label='Hamburger Icon' className='flex flex-col gap-1 bg-[#151515] p-2;
]'>
            <span className='block w-6 h-0.5 bg-white'></span>
            <span className='block w-6 h-0.5 bg-white'></span>
            <span className='block w-6 h-0.5 bg-white'></span>
          </button>
        </div>
      </div>
      
      {/* Navbar for desktop */}
      <div className='hidden z-10 md:flex'>
        <div className='logo'>
          <Image src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png" alt="Logo" width={100} height={50} />
        </div>
        <div >
          <ul className="flex flex-row gap-8">
              <li>About</li>
              <li>What We Do</li>
              <li>Jobs</li>
              <li>Projects</li>
              <li>TG Academy</li>
              <li>Strategic Partnership</li>
              <li>Pricing</li>
              <li>Book a Consultation</li>
          </ul>
        </div>
      </div>
    </nav>
      
  );
}