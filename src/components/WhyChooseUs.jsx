// components/WhyChooseUs.jsx

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-white via-sky-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight text-center mb-12">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl shadow-inner mb-4">
              <i className="fas fa-user-shield"></i>
            </div>
            <h4 className="font-semibold text-lg text-slate-800 mb-2">Trusted & Transparent</h4>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>300+ happy clients</li>
              <li>Honest service approach</li>
              <li>No hidden charges</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl shadow-inner mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h4 className="font-semibold text-lg text-slate-800 mb-2">Expert Technicians</h4>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>Years of experience</li>
              <li>Hardware + software experts</li>
              <li>Problem-solving approach</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl shadow-inner mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h4 className="font-semibold text-lg text-slate-800 mb-2">Quick Response</h4>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>Fast turnarounds</li>
              <li>On-site support</li>
              <li>Prompt communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
