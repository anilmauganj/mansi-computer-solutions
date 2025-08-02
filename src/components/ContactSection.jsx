'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight text-center mb-8">
          Contact Us
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 space-y-6 h-full min-h-[500px] flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold text-slate-700 mb-4">Send Us a Message</h4>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-600 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 rounded-md border border-slate-300 focus:outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500 text-slate-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-600 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-slate-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-600 mb-1">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-slate-600"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition font-medium w-full"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="h-full min-h-[500px] rounded-xl overflow-hidden shadow-xl border border-slate-200 flex flex-col">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.760374805682!2d81.87632727482038!3d24.666375152997464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39859ff3804bc4bd%3A0x6c3c0d104be279bb!2sMansi%20computer%20solution!5e0!3m2!1sen!2sin!4v1754078153151!5m2!1sen!2sin"
              className="w-full flex-grow"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-slate-800 text-white text-center py-3 text-base font-medium">
              📍Bhathi Road, Mauganj
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
