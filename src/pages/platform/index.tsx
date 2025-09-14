import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Platforms() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 px-8 text-white text-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x600/?innovation,technology')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Key Platforms</h1>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            At <span className="font-bold text-yellow-400">EGC India</span>, we
            don’t just build services — we create platforms that empower
            industries, communities, and global trade.
          </p>
          <Button className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400">
            Explore Platforms
          </Button>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              img: "https://source.unsplash.com/200x200/?construction,building",
              title: "BuildMate",
              desc: "A marketplace connecting builders and suppliers in the construction sector.",
            },
            {
              img: "https://source.unsplash.com/200x200/?pet,dog",
              title: "PetSure",
              desc: "Lost & found pet solution with QR ID tags and AI matching technology.",
            },
            {
              img: "https://source.unsplash.com/200x200/?motorcycle,women",
              title: "HerRidez",
              desc: "A women rider community app with AI mentor matching and event discovery.",
            },
            {
              img: "https://source.unsplash.com/200x200/?youth,media",
              title: "4CORNER",
              desc: "Youth-driven short-video and photo-sharing platform for global creators.",
            },
            {
              img: "https://source.unsplash.com/200x200/?livestream,festival",
              title: "UTAP LIVE",
              desc: "A decentralized live-streaming and festival experience platform.",
            },
            {
              img: "https://source.unsplash.com/200x200/?blockchain,ledger",
              title: "Tricon Chain (TCC)",
              desc: "Next-gen blockchain alternative with triangle ledger technology.",
            },
          ].map((platform, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={platform.img}
                  alt={platform.title}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {platform.title}
                </h3>
                <p className="text-sm text-gray-700">{platform.desc}</p>
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
            "url('https://source.unsplash.com/1600x600/?partnership,success')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Partner with EGC India</h2>
          <p className="mb-6 text-lg max-w-3xl mx-auto">
            Join us in scaling platforms that are reshaping industries and
            empowering communities across the globe.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400">
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-800 px-6 py-3 rounded-full"
            >
              Download Platform Deck
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
