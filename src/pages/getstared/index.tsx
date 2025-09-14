import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
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
          <h1 className="text-5xl font-bold mb-6">
            Get Started with EGC India
          </h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Take the first step towards transforming your business with our{" "}
            <span className="font-bold text-yellow-400">
              Commercial Services
            </span>{" "}
            and{" "}
            <span className="font-bold text-yellow-400">
              Technology Solutions
            </span>
            .
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400"
            onClick={() => navigate("/request-demo")}
          >
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?contact,phone",
              title: "Step 1 – Connect With Us",
              desc: "Reach out via contact form, email, or phone. Share your business goals and challenges.",
            },
            {
              img: "https://source.unsplash.com/200x200/?analysis,chart",
              title: "Step 2 – Customized Assessment",
              desc: "Our team will evaluate your requirements and design a tailored roadmap (EXIM, Procurement, Technology).",
            },
            {
              img: "https://source.unsplash.com/200x200/?launch,success",
              title: "Step 3 – Launch & Grow",
              desc: "Start your journey with EGC India — from pilot projects to full-scale implementations.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Start With Us */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Start With Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Free Initial Consultation",
              desc: "We provide a no-obligation consultation and needs assessment.",
            },
            {
              title: "Dedicated Account Manager",
              desc: "Personalized support throughout your engagement.",
            },
            {
              title: "Flexible Engagement Models",
              desc: "Choose between pilot, project-based, or long-term collaborations.",
            },
            {
              title: "Trusted by Global Partners",
              desc: "Backed by AECCI and international trade networks.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Callout Cards */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get Started Options
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?trade,logistics",
              title: "Commercial Services Onboarding",
              desc: "Quick setup for EXIM & procurement solutions.",
            },
            {
              img: "https://source.unsplash.com/200x200/?technology,ai",
              title: "Technology Discovery",
              desc: "Explore SaaS platforms, AI tools, and blockchain pilots.",
            },
            {
              img: "https://source.unsplash.com/200x200/?internship,students",
              title: "Internship & Collaboration",
              desc: "Unique programs for interns and ecosystem partners.",
            },
          ].map((option, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={option.img}
                  alt={option.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-700">{option.desc}</p>
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
            "url('https://source.unsplash.com/1600x600/?success,teamwork')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Let’s build your roadmap for success today with EGC India’s trusted
            services and innovative technology solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
              Request a Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-800 px-6 py-3 rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
