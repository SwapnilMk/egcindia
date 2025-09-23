import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Privacy & Cookies Policy</h1>
        <p className="text-lg max-w-4xl mx-auto">
          Your privacy matters to{" "}
          <span className="font-bold text-yellow-400">EGC India</span>. Learn
          how we handle your data responsibly across our platforms.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Privacy Policy</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {[
            {
              title: "1. Information We Collect",
              desc: "Personal data, transaction data, technical data (IP, device, browser), and usage data when you interact with our services.",
            },
            {
              title: "2. How We Use Information",
              desc: "To provide services, ensure compliance, prevent fraud, personalize experiences, and improve platform performance.",
            },
            {
              title: "3. Disclosure of Information",
              desc: "Shared only with trusted service providers, regulatory authorities, or in case of business transfers. We never sell your data.",
            },
            {
              title: "4. Data Retention",
              desc: "Data is stored only as long as needed for business, compliance, or legal requirements, then securely deleted.",
            },
            {
              title: "5. Your Rights",
              desc: "Depending on jurisdiction, you may access, correct, delete, restrict processing, or withdraw consent.",
            },
            {
              title: "6. Security",
              desc: "We use encryption, firewalls, and secure protocols, but no system can guarantee absolute protection.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cookies Policy */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Cookies Policy</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: "⚙️",
              title: "Strictly Necessary",
              desc: "Essential for core platform functionality.",
            },
            {
              icon: "🎨",
              title: "Functional Cookies",
              desc: "Remember preferences and improve user experience.",
            },
            {
              icon: "📊",
              title: "Analytics Cookies",
              desc: "Track trends and performance to enhance services.",
            },
            {
              icon: "📢",
              title: "Marketing Cookies",
              desc: "Deliver tailored ads, offers, and promotions.",
            },
          ].map((cookie, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{cookie.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {cookie.title}
                </h3>
                <p className="text-sm text-gray-700">{cookie.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?legal,privacy')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            For questions regarding Privacy or Cookies, reach out to our Legal
            Team at <span className="font-semibold">legal@egcindia.in</span>.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300">
            Send an Inquiry
          </button>
        </div>
      </section>
    </div>
  );
}
