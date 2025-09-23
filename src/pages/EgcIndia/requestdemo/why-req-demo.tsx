import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyRequestDemo() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?presentation,business')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Why Request a Demo?</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Experience how{" "}
            <span className="font-bold text-yellow-400">
              EGC India’s services and platforms
            </span>{" "}
            can transform your business before you commit.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Section 1 - Real Value */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          See Real Value in Action
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?workflow,technology",
              title: "Live Workflows",
              desc: "Get a walk-through of EXIM, procurement, and compliance processes.",
            },
            {
              img: "https://source.unsplash.com/200x200/?analytics,data",
              title: "AI Dashboards",
              desc: "Explore analytics that reveal hidden cost savings and performance insights.",
            },
            {
              img: "https://source.unsplash.com/200x200/?automation,process",
              title: "Automation Benefits",
              desc: "See how automation reduces errors and accelerates cycle times.",
            },
          ].map((value, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={value.img}
                  alt={value.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2 - Tailored Solutions */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tailored to Your Business
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Commercial Services
              </h3>
              <p className="text-sm text-gray-700">
                Focus on O2C, P2P, Inventory, and Spend Management — designed
                for your workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Technology Platforms
              </h3>
              <p className="text-sm text-gray-700">
                Experience BuildMate, PetSure, HerRidez, UTAP LIVE, and Tricon
                Chain tailored to your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3 - Expert Collaboration */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Collaborate with Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?consulting,team",
              title: "Solution Architects",
              desc: "Engage directly with experts to understand integrations and ROI.",
            },
            {
              img: "https://source.unsplash.com/200x200/?strategy,planning",
              title: "Advisory Support",
              desc: "Get tailored guidance for your industry’s regulatory and operational needs.",
            },
            {
              img: "https://source.unsplash.com/200x200/?growth,project",
              title: "Scalable Engagement",
              desc: "Learn about pilot programs and full-scale implementation models.",
            },
          ].map((expert, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={expert.img}
                  alt={expert.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {expert.title}
                </h3>
                <p className="text-sm text-gray-700">{expert.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4 - Outcomes */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Outcomes You Can Expect
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Identify cost-saving opportunities",
            "Address compliance gaps",
            "Hands-on platform experience",
            "Direct industry mapping",
          ].map((outcome, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 font-semibold text-blue-900">
                {outcome}
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
            "url('https://source.unsplash.com/1600x600/?decision,success')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">See EGC India in Action</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Schedule a demo today and discover how our solutions can accelerate
            your business growth.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Request Your Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
