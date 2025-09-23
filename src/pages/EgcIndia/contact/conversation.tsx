import { Button } from "@/components/ui/button";

export default function StartConversation() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?conversation,business')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Start a Conversation</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Take the first step toward{" "}
            <span className="font-bold text-yellow-400">
              collaboration, innovation, and growth
            </span>{" "}
            with EGC India.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Connect Now
          </Button>
        </div>
      </section>

      {/* Why Start a Conversation */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Start a Conversation?
        </h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              icon: "🤝",
              title: "Build Partnerships",
              desc: "Engage with us to create lasting and meaningful collaborations.",
            },
            {
              icon: "💡",
              title: "Explore Opportunities",
              desc: "Discover new avenues for trade, procurement, and technology.",
            },
            {
              icon: "🚀",
              title: "Get Insights",
              desc: "Leverage expert knowledge tailored to your industry.",
            },
            {
              icon: "🌍",
              title: "Global Collaboration",
              desc: "Work with us to expand your reach across global markets.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conversation Form */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Let’s Talk</h2>
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
                Company
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
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
                Topic of Interest
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Commercial Services</option>
                <option>Technology Solutions</option>
                <option>Platforms</option>
                <option>Partnerships</option>
                <option>Careers & Internships</option>
              </select>
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
              Start Conversation
            </Button>
          </form>
        </div>
      </section>

      {/* Quick Connect */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Quick Connect Options
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              icon: "📞",
              title: "Call Us",
              desc: "+91-7208046058",
            },
            {
              icon: "✉️",
              title: "Email Us",
              desc: "egcindia2015@gmail.com",
            },
            {
              icon: "💬",
              title: "Live Chat",
              desc: "Coming soon for instant conversations with our team.",
            },
          ].map((contact, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-8">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-sm text-gray-700">{contact.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?meeting,success')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Talk?</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Let’s shape the future of{" "}
            <span className="font-semibold text-yellow-400">
              trade, procurement, and technology innovation
            </span>{" "}
            together.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Schedule a Meeting
          </Button>
        </div>
      </section>
    </div>
  );
}
