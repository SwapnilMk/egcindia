import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function WhyChoose() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?business,handshake')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Why Choose EGC India?</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Your trusted partner in{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Innovation
            </span>
            .
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Get Started
          </Button>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Advantages</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?global,team",
              title: "Global + Local Expertise",
              desc: "Backed by global partnerships, rooted in Indian market insights.",
            },
            {
              img: "https://source.unsplash.com/200x200/?innovation,lightbulb",
              title: "Innovation-First Approach",
              desc: "Every service enhanced with AI, automation, and digital solutions.",
            },
            {
              img: "https://source.unsplash.com/200x200/?results,success",
              title: "Proven Results",
              desc: "250+ global programs across 16+ countries with measurable outcomes.",
            },
            {
              img: "https://source.unsplash.com/200x200/?partnership,collaboration",
              title: "Strategic Partnerships",
              desc: "Strong collaborations with industry bodies like AECCI.",
            },
            {
              img: "https://source.unsplash.com/200x200/?industry,manufacturing",
              title: "Multi-Sector Capability",
              desc: "From Automotive to Digital Commerce, we serve diverse industries.",
            },
            {
              img: "https://source.unsplash.com/200x200/?growth,vision",
              title: "Long-Term Commitment",
              desc: "We focus on building ecosystems, not just services.",
            },
          ].map((reason, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-700">{reason.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              number: "250+",
              label: "Programs Managed Globally",
            },
            {
              number: "16+",
              label: "Countries of Presence",
            },
            {
              number: "1000s",
              label: "Business Transactions Optimized",
            },
            {
              number: "Dozens",
              label: "SaaS / Digital Platforms Launched",
            },
          ].map((stat, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-700">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "EGC India simplified our procurement and helped us cut costs by 20%.",
              name: "Client A",
            },
            {
              quote:
                "The AI-driven analytics transformed how we manage inventory and compliance.",
              name: "Client B",
            },
          ].map((test, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <p className="italic text-gray-700 mb-4">“{test.quote}”</p>
                <h4 className="font-semibold text-blue-900">— {test.name}</h4>
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
            "url('https://source.unsplash.com/1600x600/?growth,success')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Choose Growth. Choose EGC India.
          </h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Partner with us today to unlock global opportunities with
            technology-driven solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
              Partner With Us
            </Button>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-800 px-6 py-3 rounded-full"
              onClick={() => navigate("/contact/connect-team")}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
