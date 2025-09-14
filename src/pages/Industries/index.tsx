import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Industries() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?industry,global')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            EGC India partners with diverse industries to deliver{" "}
            <span className="font-bold text-yellow-400">
              tailored services and technology solutions
            </span>{" "}
            that drive growth, innovation, and compliance.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?car,factory",
              title: "Automotive",
              desc: "Supporting automotive OEMs and suppliers with procurement, compliance, and digital platforms.",
            },
            {
              img: "https://source.unsplash.com/200x200/?airplane,aerospace",
              title: "Aerospace",
              desc: "Delivering solutions for aerospace manufacturing, supply chain optimization, and documentation.",
            },
            {
              img: "https://source.unsplash.com/200x200/?factory,industry",
              title: "Heavy Industry",
              desc: "Streamlining procurement and EXIM operations for large-scale industrial projects.",
            },
            {
              img: "https://source.unsplash.com/200x200/?energy,solar",
              title: "Energy & Utilities",
              desc: "Providing technology-driven procurement and compliance solutions for energy and utility providers.",
            },
            {
              img: "https://source.unsplash.com/200x200/?medical,devices",
              title: "Medical Devices & Healthcare",
              desc: "Ensuring regulatory compliance and reliable supply chains for healthcare and medical device companies.",
            },
            {
              img: "https://source.unsplash.com/200x200/?construction,realestate",
              title: "Construction & Real Estate",
              desc: "Platforms like BuildMate connect builders, suppliers, and developers for efficient project execution.",
            },
            {
              img: "https://source.unsplash.com/200x200/?digital,technology",
              title: "Digital Commerce",
              desc: "Building SaaS platforms and digital ecosystems to power modern commerce.",
            },
          ].map((industry, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-700">{industry.desc}</p>
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
            "url('https://source.unsplash.com/1600x600/?business,partnership')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build the Future Together
          </h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            No matter your industry, EGC India is committed to empowering growth
            with customized solutions.
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
