import React from "react";
import {
  CheckCircle2,
  User,
  PackageSearch,
  Megaphone,
  ShieldAlert,
  Lightbulb,
  Lock,
  ChevronRight,
  Bot,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const StatCard = ({ icon: Icon, title, children }: any) => (
  <Card className="bg-[#0F2430] border-0 shadow-xl rounded-2xl text-slate-100">
    <CardContent className="p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl bg-[#15384a]">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      {children}
    </CardContent>
  </Card>
);

export default function Overview() {
  return (
    <>
      {/* Top bar */}
      <div className="h-[64px] border-b border-[#123041] bg-[#0D202A] flex items-center justify-between px-6">
        <div>
          <div className="text-2xl font-extrabold tracking-tight">
            Good Morning!
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-300 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Exporter • Certified Exporter Ltd.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="bg-transparent border-[#1d3a49] text-slate-200 hover:bg-[#143141]"
          >
            Help
          </Button>
          <Button className="bg-[#E3B651] text-[#0B1C25] hover:bg-[#d3a645] font-semibold">
            Upgrade
          </Button>
        </div>
      </div>

      {/* Content grid */}
      <div className="p-6 grid grid-cols-12 gap-5">
        {/* Profile Status */}
        <div className="col-span-6">
          <StatCard icon={User} title="Profile Status">
            <div className="text-sm text-slate-300 mb-3">
              Profile 80% complete
            </div>
            <Progress value={80} className="h-2 bg-[#102835]" />
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button className="bg-[#E3B651] text-[#0B1C25] hover:bg-[#d3a645]">
                Complete your Profile
              </Button>
              <Button
                variant="outline"
                className="border-[#1d3a49] text-slate-200 hover:bg-[#143141]"
              >
                View Checklist
              </Button>
            </div>
          </StatCard>
        </div>

        {/* Product Catalog */}
        <div className="col-span-6">
          <StatCard icon={PackageSearch} title="Product Catalog">
            <div className="text-sm text-slate-300">
              5 of 10 products listed
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                "Basmati Rice 1121",
                "Refined Sugar ICUMSA45",
                "Wheat Flour",
                "Sesame Seeds",
                "Maize (Yellow)",
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-[#112a38] rounded-xl p-3 text-xs text-slate-200 flex items-center justify-between"
                >
                  <span className="truncate pr-2">{p}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button className="bg-[#2FA97C] hover:bg-[#27916a]">
                Add Product
              </Button>
              <Button
                variant="outline"
                className="border-[#1d3a49] text-slate-200 hover:bg-[#143141]"
              >
                Manage Products
              </Button>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Basic plan limit: 10 products
            </div>
          </StatCard>
        </div>

        {/* Leads & RFQs */}
        <div className="col-span-6">
          <StatCard icon={Megaphone} title="Leads & RFQs">
            <div className="text-sm text-slate-300 mb-3">3 new inquiries</div>
            <div className="space-y-2">
              {[
                { c: "Global Foods LLC", t: "RFQ: Basmati Rice 1121" },
                { c: "Sunrise Trading", t: "Lead: Wheat Flour" },
                { c: "Marina Imports", t: "RFQ: Sesame Seeds" },
              ].map((x, i) => (
                <div
                  key={i}
                  className="bg-[#112a38] rounded-xl p-3 text-xs text-slate-200 flex items-center justify-between"
                >
                  <div className="truncate pr-2">
                    <span className="font-semibold">{x.c}</span> — {x.t}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-2 border-[#1d3a49] text-slate-200 hover:bg-[#143141]"
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="h-7 px-2 bg-[#213b49] text-slate-400"
                    >
                      <Lock className="w-3.5 h-3.5 mr-1" />
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-slate-400">
              Responding to RFQs is available on Growth/Pro plans.
            </div>
          </StatCard>
        </div>

        {/* Compliance Alerts */}
        <div className="col-span-6">
          <StatCard icon={ShieldAlert} title="Compliance Alerts">
            <div className="space-y-2 text-sm">
              <div className="bg-[#361d1a] border border-[#5b2b23] text-[#ffb4a6] rounded-xl p-3">
                1 Certificate expiring soon —{" "}
                <span className="font-semibold text-[#ffd3c9]">FSSAI</span> (15
                days)
              </div>
              <div className="bg-[#112a38] text-slate-200 rounded-xl p-3">
                IEC License — valid until 2026-03-31
              </div>
            </div>
            <div className="mt-3">
              <Button className="bg-[#E3B651] text-[#0B1C25] hover:bg-[#d3a645]">
                Review Compliance
              </Button>
            </div>
          </StatCard>
        </div>

        {/* AI Tips */}
        <div className="col-span-7">
          <StatCard icon={Lightbulb} title="AI Tips">
            <div className="text-sm text-slate-200">
              Consider exporting to two new markets this quarter. Update product
              descriptions with HS Codes for improved discovery.
            </div>
          </StatCard>
        </div>

        {/* AI Assistant Panel */}
        <div className="col-span-5">
          <Card className="bg-[#102a37] border-0 shadow-xl rounded-2xl text-slate-100 h-full">
            <CardContent className="p-5 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#15384a]">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  AI Assistant
                </h3>
              </div>
              <div className="text-sm text-slate-300 flex-1">
                I can suggest next steps based on your activity.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Complete your profile to 100% to unlock verification badge.
                  </li>
                  <li>Add high-quality photos to your top 3 products.</li>
                  <li>Schedule reminders for compliance renewals.</li>
                </ul>
              </div>
              <div className="pt-3">
                <Button className="w-full bg-[#E3B651] text-[#0B1C25] hover:bg-[#d3a645]">
                  NEXT
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
