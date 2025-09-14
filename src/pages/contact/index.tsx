import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?contact,communication')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            We’d love to hear from you! Connect with{" "}
            <span className="font-bold text-yellow-400">EGC India</span> for
            inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              icon: "📍",
              title: "Our Office",
              desc: "Navi Mumbai, Maharashtra, India",
            },
            {
              icon: "📞",
              title: "Phone",
              desc: "+91 720 804 6058",
            },
            {
              icon: "✉️",
              title: "Email",
              desc: "egcindia2015@gmail.com",
            },
          ].map((info, idx) => (
            <div key={idx} className="bg-white p-8 shadow-md rounded-lg">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {info.title}
              </h3>
              <p className="text-sm text-gray-700">{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Send Us a Message
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <form className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Type your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <Button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Find Us</h2>
        <div className="max-w-5xl mx-auto">
          <iframe
            title="EGC India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985166!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630fd7f23ff%3A0xdea51c2b1f5a1c0b!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1637745642021!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?network,global')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect Today</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Whether you’re exploring services, partnerships, or career
            opportunities, EGC India is here to support you.
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400"
            onClick={() => navigate("/contact/connect-team")}
          >
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
