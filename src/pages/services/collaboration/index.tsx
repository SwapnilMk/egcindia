import { Card, CardContent } from "@/components/ui/card";

export default function CommercialServicesCollaboration() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section with Logos */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-8 text-center">
        <div className="flex justify-center gap-12 mb-8 flex-wrap">
          <img
            src="/mnt/data/ChatGPT Image Sep 1, 2025, 11_28_49 PM.png"
            alt="Econ's EXIM Gateway"
            className="h-20 rounded-lg bg-white p-2"
          />
          <img
            src="/mnt/data/Screenshot_20250831_140448_Samsung Internet.png"
            alt="AECCI"
            className="h-20 rounded-lg bg-white p-2"
          />
          <img
            src="/mnt/data/Screenshot_20250901_235655_Chrome.png"
            alt="EGC India"
            className="h-20 rounded-lg bg-white p-2"
          />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Commercial Services Collaboration
        </h1>
        <p className="text-lg max-w-4xl mx-auto">
          A strong partnership between{" "}
          <span className="font-bold text-yellow-400">Econ’s EXIM Gateway</span>
          , <span className="font-bold text-yellow-400">AECCI</span>, and{" "}
          <span className="font-bold text-yellow-400">EGC India</span>, driving
          global trade, procurement, and technology-forward commercial
          solutions.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Commercial Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "EXIM Gateway Solutions",
              desc: "Seamless facilitation of imports/exports, regulatory compliance, and trade documentation.",
              icon: "🌐",
            },
            {
              title: "Procure-to-Pay & Order-to-Cash",
              desc: "Automating financial and procurement processes to increase transparency and efficiency.",
              icon: "💳",
            },
            {
              title: "Trade Advisory & Compliance",
              desc: "End-to-end support to help businesses comply with legal frameworks and global standards.",
              icon: "📑",
            },
            {
              title: "Inventory & Spend Management",
              desc: "AI-driven tools to track inventory, optimize spending, and reduce operational costs.",
              icon: "📊",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Collaboration Benefits */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why This Collaboration Matters
        </h2>
        <p className="max-w-4xl mx-auto text-lg mb-12 text-center">
          Together, <span className="font-semibold">Econ’s EXIM Gateway</span>,{" "}
          <span className="font-semibold">AECCI</span>, and{" "}
          <span className="font-semibold">EGC India</span> create a seamless
          ecosystem of trade, procurement, and compliance — empowering
          businesses to expand globally with confidence.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              icon: "🌍",
              title: "Global + Local Expertise",
              desc: "Combining deep local understanding with international trade knowledge.",
            },
            {
              icon: "🤝",
              title: "Trusted Industry Partnerships",
              desc: "Backed by strong networks and associations that ensure credibility.",
            },
            {
              icon: "📈",
              title: "Proven Track Record",
              desc: "Delivering consistent results in EXIM and commercial service management.",
            },
          ].map((impact, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{impact.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {impact.title}
                </h3>
                <p className="text-sm text-gray-700">{impact.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?logistics,trade')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Unlock opportunities in trade, procurement, and technology-driven
            commercial services with our collaborative ecosystem.
          </p>
          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
