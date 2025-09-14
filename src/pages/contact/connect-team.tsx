import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function ConnectOurTeam() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?teamwork,office')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Connect with Our Team</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Meet the people behind{" "}
            <span className="font-bold text-yellow-400">EGC India</span> — ready
            to collaborate, innovate, and drive your business forward.
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400"
            onClick={() => navigate("/contact/conversation")}
          >
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Leadership & Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?businessman,portrait",
              name: "Zaheer Bukhari",
              role: "Founder & Visionary",
              desc: "Driving EGC India’s mission to bridge commercial services with technology innovation.",
            },
            {
              img: "https://source.unsplash.com/200x200/?advisor,professional",
              name: "Advisory Board",
              role: "Industry Experts & Mentors",
              desc: "Guiding EGC India’s strategy, compliance, and innovation with global expertise.",
            },
            {
              img: "https://source.unsplash.com/200x200/?team,leader",
              name: "Project Leads",
              role: "Operations & Technology",
              desc: "Overseeing execution of EXIM services, platforms, and digital solutions.",
            },
          ].map((member, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full mb-4 mx-auto"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How to Connect */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          How You Can Connect
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: "🤝",
              title: "Partnerships",
              desc: "Collaborate with us on trade, procurement, or technology-driven projects.",
            },
            {
              icon: "💼",
              title: "Careers & Internships",
              desc: "Explore opportunities to grow with EGC India through unique programs.",
            },
            {
              icon: "📩",
              title: "General Inquiries",
              desc: "Reach out to our team for service details, demos, or collaborations.",
            },
          ].map((option, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-700">{option.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-20 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Directly Connect with Us</h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Choose your preferred way to connect and our team will get back to you
          promptly.
        </p>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              icon: "📞",
              title: "Call Us",
              desc: "+91-1234567890",
            },
            {
              icon: "✉️",
              title: "Email Us",
              desc: "info@egcindia.in",
            },
            {
              icon: "📍",
              title: "Visit Us",
              desc: "Navi Mumbai, Maharashtra, India",
            },
          ].map((contact, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-700">{contact.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?connection,network')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Connect with our team to explore tailored solutions, partnerships,
            and opportunities for growth.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Connect Now
          </Button>
        </div>
      </section>
    </div>
  );
}
