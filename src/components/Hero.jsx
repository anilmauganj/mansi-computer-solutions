import Image from 'next/image';


export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#696969] to-[#0c5ad0] text-slate-800 py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white animate-fade-in-up">
            Reliable IT &amp; Computer Services
          </h2>
          <p className="text-lg lg:text-xl mb-6 text-white/80 animate-fade-in-up delay-100">
            We repair, upgrade, and secure systems with expert care. Trusted by home users and businesses alike.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200">
            <a
              href="#contact"
              className="bg-[#165ca4] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#114a86] transition"
            >
              Request a Callback
            </a>
            <a
              href="#about"
              className="bg-white/10 border border-white text-white backdrop-blur-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-slate-900 transition duration-300 shadow"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <Image
            width={1000} 
            height={1000}
            src="/img/pc-test-2.png"
            alt="IT Services"
            className="animate-fade-in-up delay-300 w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
