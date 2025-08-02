'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/img/computer-hardware.jpg"
              alt="About Us"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-8">About Us</h3>
<p className="text-gray-700 text-lg leading-relaxed mb-6">
  <strong>Mansi Computer Solutions</strong>, run by <strong>Mr. Manish Mishra</strong> in Mauganj, offers computer and laptop repair, hardware & software support, and sales & service of new systems. With 17+ years of experience, we provide reliable and affordable IT solutions.
</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 text-xl mr-3 mt-1"></i>
                Fast & Reliable Computer Repair
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 text-xl mr-3 mt-1"></i>
                Trusted by 300+ Happy Clients
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 text-xl mr-3 mt-1"></i>
                Expert Technicians & On-Site Service
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
