import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import egcLogo from "@/assets/logo/ecgindia.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <img
            src={egcLogo}
            alt="EGC India Logo"
            className="mx-auto mb-6 h-16 sm:h-20 md:h-24"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Welcome to EGC India
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto mb-6">
            Empowering businesses with{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Innovation
            </span>{" "}
            for a global future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-400 w-full sm:w-auto"
              onClick={() => navigate("/services")}
            >
              Explore Our Business
            </Button>
            <Button
              variant="outline"
              className="border-white hover:bg-white text-black hover:text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto"
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="font-bold">EGC India</span> (Econs Gateway
            Commercial Services Pvt. Ltd.) is a technology-driven company
            redefining how businesses manage
            <strong> EXIM, procurement, and trade operations</strong>. We
            combine global expertise, AI-driven innovation, and industry
            partnerships to deliver sustainable growth.
          </p>
        </div>
        <div className="bg-green-100 rounded-2xl shadow-lg h-48 sm:h-64 flex items-center justify-center">
          <span className="text-lg sm:text-xl font-semibold text-blue-900">
            Global Trade + Technology
          </span>
        </div>
      </section>

      {/* Explore Our Business */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Explore Our Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6">
          <Card className="shadow-md">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-900">
                Commercial Services
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>🌐 EXIM Gateway Solutions</li>
                <li>📑 Procure-to-Pay & Order-to-Cash</li>
                <li>📦 Trade Advisory & Compliance</li>
                <li>📊 Inventory & Spend Management</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-900">
                IT & Technology
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>💻 Custom App Development</li>
                <li>📊 AI & Data Analytics</li>
                <li>☁️ Cloud Integration & Automation</li>
                <li>
                  🚀 Platforms: BuildMate, PetSure, HerRidez, 4CORNER, UTAP LIVE
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Platforms */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Our Key Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "BuildMate",
              desc: "Marketplace connecting builders and suppliers in construction.",
            },
            {
              name: "PetSure",
              desc: "Lost & found pet solution with AI support and QR ID tagging.",
            },
            {
              name: "HerRidez",
              desc: "Women rider community app with AI mentor matching.",
            },
            {
              name: "4CORNER",
              desc: "Youth-driven short-video and photo-sharing platform.",
            },
            {
              name: "UTAP LIVE",
              desc: "Decentralized live-streaming & festival experience platform.",
            },
            {
              name: "Tricon Chain (TCC)",
              desc: "Next-gen blockchain alternative with triangle ledger technology.",
            },
          ].map((platform, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {platform.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {[
              "Automotive",
              "Aerospace",
              "Heavy Industry",
              "Energy & Utilities",
              "Medical Devices",
              "Construction & Real Estate",
              "Digital Commerce",
            ].map((industry, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="p-3 sm:p-4 font-semibold text-blue-900">
                  {industry}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intern Opportunities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-yellow-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-900">
          Intern Opportunities at EGC India
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-6 text-base sm:text-lg">
          We believe in shaping the next generation of innovators. Our
          internships give students and fresh graduates a unique platform to{" "}
          <span className="font-semibold text-blue-700">
            learn, create, and lead
          </span>{" "}
          within real business and technology projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-6">
          {[
            {
              title: "Technology Internships",
              desc: "Hands-on experience in app development, AI, cloud, and blockchain innovation.",
            },
            {
              title: "Commercial Services Internships",
              desc: "Work on EXIM trade, procurement, and compliance projects with global exposure.",
            },
            {
              title: "Creative & Design Internships",
              desc: "Contribute to product UI/UX, branding, and investor-ready presentations.",
            },
          ].map((role, idx) => (
            <Card
              key={idx}
              className="shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  {role.desc}
                </p>
                <Button className="bg-blue-900 text-white px-3 sm:px-4 py-2 rounded-full shadow-md hover:bg-blue-800">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Choose EGC India?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "Global + Local Expertise",
            "Innovation-First Approach",
            "Proven Platforms & Successful Pilots",
            "Strategic Partnerships (AECCI & Global Alliances)",
            "Multi-Sector Portfolio",
            "Commitment to Long-Term Growth",
          ].map((item, idx) => (
            <Card key={idx} className="bg-blue-800 shadow-md">
              <CardContent className="p-4 sm:p-6 text-base sm:text-lg">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-12 px-4 sm:px-6 lg:px-8 text-center text-blue-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s Grow Together
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          Partner with EGC India for commercial services, technology innovation,
          and career growth opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-blue-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-800 w-full sm:w-auto"
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
