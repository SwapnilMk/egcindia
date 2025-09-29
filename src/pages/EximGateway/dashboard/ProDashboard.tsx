import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExporterProDashboard() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-4 sm:px-8 py-6">
      {/* Pro Plan Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-8">
        <p className="font-semibold">You are on Pro Plan.</p>
        <p className="text-sm">
          All premium features unlocked. Enjoy AI-powered insights & analytics.
        </p>
        <button className="mt-3 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400">
          Manage Plan
        </button>
      </div>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "RFQs Created", value: "45" },
          { title: "Quotes Sent", value: "32" },
          { title: "Shipments In Progress", value: "14" },
          { title: "Pending Compliance", value: "6" },
        ].map((stat, i) => (
          <Card
            key={i}
            className="shadow-lg border border-gray-200 hover:shadow-xl"
          >
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-gray-700">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Exporter Tools */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "📑 Create Export Offer",
            desc: "Upload product details, pricing, MOQ, with AI RFQ generation.",
          },
          {
            title: "📤 Send & Manage Quotes",
            desc: "Track quote status, reminders, and AI suggestions.",
          },
          {
            title: "📦 Shipment Compliance",
            desc: "Upload COO, Phyto, Insurance docs for instant AI validation.",
          },
          {
            title: "🚚 Logistics Sync",
            desc: "Book freight & sync with transport/shipping agents.",
          },
          {
            title: "📊 Export Analytics",
            desc: "Full AI dashboards, predictive charts, and downloadable reports.",
          },
          {
            title: "🤖 AI Market Insights",
            desc: "Predictive demand, competitor benchmarking, and price heatmaps.",
          },
        ].map((tool, i) => (
          <Card
            key={i}
            className="shadow-md border border-gray-200 hover:border-yellow-500 cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-700 text-sm">{tool.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          ⚡ Quick Actions (All Unlocked)
        </h2>
        <div className="flex space-x-4 flex-wrap">
          <button
            onClick={() => setShowOrderForm(true)}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            + Create Order
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
            Generate Invoice
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
            Upload Certificate
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
            Track Shipment
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400">
            Export Analytics Report
          </button>
        </div>
      </section>

      {/* Order Form Modal with File Upload */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              📝 Create New Export Order
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-lg"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  className="w-full border px-4 py-2 rounded-lg"
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Price (per unit)
                </label>
                <input
                  type="number"
                  className="w-full border px-4 py-2 rounded-lg"
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Buyer</label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-lg"
                  placeholder="Enter buyer name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Attach Product Image/Docs
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border px-4 py-2 rounded-lg"
                />
                {file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Attached: {file.name}
                  </p>
                )}
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
