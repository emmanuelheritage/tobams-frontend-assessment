import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#11040e] text-white p-7">
            <section className="flex flex-col gap-6 border-b border-gray-700">
                <Image src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png" alt="Tobams Group" width={150} height={150} />
                <p>
                    Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, 
                    specializing in talent acquisition, internships, and skill development with a global perspective.
                </p>
                <Image src="/social_media_icons.svg" alt="Social Media Icons" width={500} height={500} />
                <h2 className="font-semibold text-xl">What we do</h2>
                <ul className='flex flex-col gap-3'>
                    <li>Sustainability Services</li>
                    <li>Strategy Planning and Implementation</li>
                    <li>Tech Talent Solutions</li>
                    <li>Training and Development </li>
                    <li>IT Consulting Services</li>
                    <li>Social Impact</li>
                </ul>
                <h2 className="font-semibold text-xl">Company</h2>
                <ul className='flex flex-col gap-3'>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Projects</li>
                    <li>Our Founder</li>
                    <li>Business Model</li>
                    <li>The Team</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                    <li>FAQs</li>
                    <li>Testimonials</li>
                </ul>
                <h2 className="font-semibold text-xl">Solution</h2>
                <ul className='flex flex-col gap-3'>
                    <li>Tobams Group Academy</li>
                    <li>Help a Tech Talent</li>
                    <li>Campus Ambassadors Program</li>
                    <li>Join Our Platform</li>
                    <li>Pricing</li>
                    <li>Book a Consultation</li>
                    <li>Join our Slack Community</li>
                </ul>
            </section>
            <section className="flex flex-col gap-6 border-b border-gray-700 p-5">
                <div className='flex flex-col gap-3 bg-white/60 p-5 rounded-lg'>
                <h1 className="font-semibold text-xl">Contact Information</h1>
                    <div className='flex gap-3'>
                        <Image src="/message_icon.svg" alt="Message Icon" width={30} height={30} />
                        theteam@tobamsgroup.com
                    </div>
                    <div className='flex gap-3'>
                        <Image src="/telephone_icon.svg" alt="Phone Icon" width={30} height={30} />
                        +447886600748
                    </div>
                </div>
            </section>
            <section>

            </section>
        </footer>
    );
}