import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import egcLogo from "@/assets/logo/ecgindia.png";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?global,trade')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <img
            src={egcLogo}
            alt="EGC India Logo"
            className="mx-auto mb-4 sm:mb-6 h-16 sm:h-20 md:h-24"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
            EGC India delivers{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Solutions
            </span>{" "}
            that power growth, efficiency, and transformation.
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-400 w-full sm:w-auto"
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
          Commercial Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              img: "https://source.unsplash.com/200x200/?logistics,ship",
              title: "EXIM Gateway Solutions",
              desc: "One-stop import/export support with compliance and facilitation services.",
            },
            {
              img: "https://source.unsplash.com/200x200/?finance,documents",
              title: "Procure-to-Pay & Order-to-Cash",
              desc: "Streamlined procurement and financial cycles for efficiency and transparency.",
            },
            {
              img: "https://source.unsplash.com/200x200/?compliance,legal",
              title: "Trade Advisory & Compliance",
              desc: "Guidance on documentation, risk mitigation, and global compliance standards.",
            },
            {
              img: "https://source.unsplash.com/200x200/?inventory,warehouse",
              title: "Inventory & Spend Management",
              desc: "Smarter controls with analytics to optimize inventory and reduce costs.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-full mb-2 sm:mb-4 w-32 h-32"
                />
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* IT & Technology Solutions */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
          IT & Technology Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              img: "https://source.unsplash.com/200x200/?app,development",
              title: "Custom App Development",
              desc: "Enterprise-grade apps tailored for B2B and B2C businesses.",
            },
            {
              img: "https://source.unsplash.com/200x200/?data,analytics",
              title: "AI & Analytics",
              desc: "Real-time insights and predictive models for smarter decisions.",
            },
            {
              img: "https://source.unsplash.com/200x200/?cloud,technology",
              title: "Cloud Integration & Automation",
              desc: "Seamless integrations and scalable automated solutions.",
            },
            {
              img: "https://source.unsplash.com/200x200/?blockchain,crypto",
              title: "Blockchain Innovation (Tricon Chain, TCC)",
              desc: "Next-gen ledger solutions for secure, transparent operations.",
            },
          ].map((tech, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="rounded-full mb-2 sm:mb-4 w-32 h-32"
                />
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-700">{tech.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          {[
            "Automotive",
            "Aerospace",
            "Energy & Utilities",
            "Medical Devices",
            "Construction & Real Estate",
            "Digital Commerce",
          ].map((industry, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <img
                  src={`https://source.unsplash.com/100x100/?${industry}`}
                  alt={industry}
                  className="mx-auto mb-2 sm:mb-4 rounded-full w-16 h-16 sm:w-20 sm:h-20"
                />
                <h3 className="text-base sm:text-lg font-semibold text-blue-900">
                  {industry}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center  bg-blue-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?teamwork,success')",
        }}
      >
        <div className=" max-w-6xl mx-auto">
          <div className="relative z-10 ">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to transform your business with EGC India?
            </h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl mx-auto">
              Connect with our team today to explore customized service
              solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 md:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-400 w-full sm:w-auto">
                Request a Demo
              </Button>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-800 px-4 sm:px-6 md:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
