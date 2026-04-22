import Image from "next/image";

export function Whatwedo() {
  return (
    // Mobile view
    <section className=" flex flex-col relative mt-18 w-full py-9 px-2 justify-center items-center gap-8 md:hidden ">
      <div className="absolute inset-0">
         <Image
      src="/3f9fee51039d846e8786883c446663724e497325.jpg"
      alt="Section 1 background"
      fill
      className="object-cover"
       />
      </div>
      <div className="flex flex-col gap-3  justify-center items-center ">
      <div className="rounded-full bg-white/15 z-10 px-4 py-2"><h2 className="text-white">What We Do</h2></div>
      <h1 className="text-white z-10">Learning and Development</h1>
      <p className="text-center text-white z-10">
        Our comprehensive range of programs and resources is designed to enhance
        skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
      </p>
      <button className="text-white w-fit py-2 px-4 rounded bg-[#571255] z-10">
        Book a Consultation
      </button>
    </div>
    </section>
  );
}