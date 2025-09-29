import { IconTrendingUp, IconLock } from "@tabler/icons-react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BasicDashboard() {
  const features = [
    {
      icon: "📑",
      title: "Create Export Offers",
      description:
        "Upload product details, pricing, MOQ and share basic offers.",
      isActive: true,
      variant: "active",
    },
    {
      icon: "📤",
      title: "Send & Manage Quotes",
      description: "Track and manage your basic buyer quotes manually.",
      isActive: true,
      variant: "active",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Available only in Growth & Pro Plans",
      isActive: false,
      variant: "growth",
    },
    {
      icon: "🌍",
      title: "Buyer Leads",
      description: "Available only in Growth & Pro Plans",
      isActive: false,
      variant: "growth",
    },
    {
      icon: "⚡",
      title: "AI Insights",
      description: "Available only in Pro Plan",
      isActive: false,
      variant: "pro",
    },
    {
      icon: "👨‍💼",
      title: "Dedicated Manager",
      description: "Available only in Pro Plan",
      isActive: false,
      variant: "pro",
    },
  ];

  return (
    <>
      {/* Compact Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 lg:p-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`group relative flex flex-col justify-between border rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
              ${
                feature.isActive
                  ? "bg-gradient-to-br from-blue-50/60 to-indigo-50/60 border-blue-100"
                  : "bg-gray-50/50 border-gray-200/40 opacity-90 hover:opacity-100"
              }`}
          >
            <CardHeader className="p-0 flex items-center gap-3">
              {/* Icon (small) */}
              <div
                className={`p-2 rounded-lg shadow-sm text-lg
                ${
                  feature.isActive
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-500"
                }
              `}
              >
                {feature.icon}
              </div>

              {/* Title + Lock */}
              <div className="flex flex-col flex-1">
                <CardTitle
                  className={`text-base font-semibold leading-snug
                  ${feature.isActive ? "text-blue-900" : "text-gray-700"}`}
                >
                  {feature.title}
                </CardTitle>

                {!feature.isActive && (
                  <div className="flex items-center gap-1">
                    <IconLock className="h-3 w-3 text-gray-400" />
                    <span
                      className={`text-xs font-medium
                        ${
                          feature.variant === "pro"
                            ? "text-purple-700"
                            : "text-emerald-700"
                        }`}
                    >
                      {feature.variant === "pro" ? "Pro Plan" : "Growth & Pro"}
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardFooter className="p-0 mt-2">
              <p
                className={`text-xs leading-relaxed ${
                  feature.isActive ? "text-gray-700" : "text-gray-500 italic"
                }`}
              >
                {feature.description}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Quick Actions (No Dialog, Just Buttons) */}
      <div className="mt-8 px-4 lg:px-6">
        <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 rounded-xl p-5 border border-blue-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-200/50">
                <IconTrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-900">
                  ⚡ Quick Actions
                </h2>
                <p className="text-sm text-blue-600">Get started quickly</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow hover:scale-105 transition"
              >
                + Create RFQ
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                📄 Generate Invoice
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                📎 Upload Certificate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
