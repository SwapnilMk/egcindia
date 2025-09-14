import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RequestDemo() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?demo,technology')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Request a Demo</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Experience how{" "}
            <span className="font-bold text-yellow-400">
              EGC India’s platforms and services
            </span>{" "}
            can transform your business with real-time insights and innovation.
          </p>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Book Your Demo</h2>
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
                Select Service
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Commercial Services</option>
                <option>IT & Technology Solutions</option>
                <option>BuildMate</option>
                <option>PetSure</option>
                <option>HerRidez</option>
                <option>4CORNER</option>
                <option>UTAP LIVE</option>
                <option>Tricon Chain (TCC)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                placeholder="Tell us more about your needs..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <Button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800">
              Submit Request
            </Button>
          </form>
        </div>
      </section>

      {/* Benefits of Demo */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Request a Demo?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?insights,data",
              title: "Real-Time Insights",
              desc: "See how our platforms deliver live dashboards and analytics.",
            },
            {
              img: "https://source.unsplash.com/200x200/?customization,tools",
              title: "Tailored Solutions",
              desc: "Experience services designed to match your exact business needs.",
            },
            {
              img: "https://source.unsplash.com/200x200/?team,collaboration",
              title: "Expert Guidance",
              desc: "Get advice directly from our solution architects and consultants.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700">{benefit.desc}</p>
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
            "url('https://source.unsplash.com/1600x600/?future,success')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Transformation Today
          </h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Discover how EGC India can optimize your processes and accelerate
            your growth.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Request Your Demo Now
          </Button>
        </div>
      </section>
    </div>
  );
}
