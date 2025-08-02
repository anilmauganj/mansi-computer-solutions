'use client';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white via-indigo-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight text-center mb-12">
          Our Products
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition group hover:bg-gradient-to-br from-indigo-50 to-white">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-md opacity-70"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-indigo-50 rounded-full text-indigo-600 text-2xl group-hover:scale-110 transition">
                <i className="fas fa-laptop-code"></i>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-center text-slate-800 mb-3 border-b-2 border-indigo-500 inline-block pb-1">
              Laptops & PCs
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm mt-4">
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Branded & Assembled PCs
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Student & Office Laptops
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Gaming Configurations
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition group hover:bg-gradient-to-br from-indigo-50 to-white">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-md opacity-70"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-indigo-50 rounded-full text-indigo-600 text-2xl group-hover:scale-110 transition">
                <i className="fas fa-microchip"></i>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-center text-slate-800 mb-3 border-b-2 border-indigo-500 inline-block pb-1">
              Computer Parts
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm mt-4">
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> RAM, SSD, HDD, SMPS
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Cooling Fans & Graphics Card
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Power Cables & Accessories
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition group hover:bg-gradient-to-br from-indigo-50 to-white">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-md opacity-70"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-indigo-50 rounded-full text-indigo-600 text-2xl group-hover:scale-110 transition">
                <i className="fas fa-print"></i>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-center text-slate-800 mb-3 border-b-2 border-indigo-500 inline-block pb-1">
              Printers & Accessories
            </h4>
            <ul className="text-gray-600 space-y-2 text-sm mt-4">
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Inkjet & Laser Printers
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Printer Cartridges
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle text-[6px] mt-2 text-indigo-500"></i> Mouse, Keyboard & UPS
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-[#165ca4] text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Contact Us to Order
          </a>
        </div>
      </div>
    </section>
  );
}
