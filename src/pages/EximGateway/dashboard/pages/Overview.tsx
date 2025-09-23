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
import { ThemeToggle } from "@/components/theme-toggle";

const StatCard = ({ icon: Icon, title, children }: any) => (
  <Card className="shadow-xl rounded-2xl">
    <CardContent className="p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl bg-muted">
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
    <div className="flex-1 overflow-y-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-10 h-[64px] border-b bg-background flex items-center justify-between px-6">
        <div>
          <div className="text-2xl font-extrabold tracking-tight">
            Good Morning!
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-500 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Exporter • Certified Exporter Ltd.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline">Help</Button>
          <Button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 font-semibold">
            Upgrade
          </Button>
        </div>
      </div>

      {/* Content grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Profile Status */}
        <div className="lg:col-span-6">
          <StatCard icon={User} title="Profile Status">
            <div className="text-sm text-muted-foreground mb-3">
              Profile 80% complete
            </div>
            <Progress value={80} className="h-2" />
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                Complete your Profile
              </Button>
              <Button variant="outline">View Checklist</Button>
            </div>
          </StatCard>
        </div>

        {/* Product Catalog */}
        <div className="lg:col-span-6">
          <StatCard icon={PackageSearch} title="Product Catalog">
            <div className="text-sm text-muted-foreground">
              5 of 10 products listed
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Basmati Rice 1121",
                "Refined Sugar ICUMSA45",
                "Wheat Flour",
                "Sesame Seeds",
                "Maize (Yellow)",
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-muted rounded-xl p-3 text-xs flex items-center justify-between"
                >
                  <span className="truncate pr-2">{p}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Add Product
              </Button>
              <Button variant="outline">Manage Products</Button>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Basic plan limit: 10 products
            </div>
          </StatCard>
        </div>

        {/* Leads & RFQs */}
        <div className="lg:col-span-6">
          <StatCard icon={Megaphone} title="Leads & RFQs">
            <div className="text-sm text-muted-foreground mb-3">
              3 new inquiries
            </div>
            <div className="space-y-2">
              {[
                { c: "Global Foods LLC", t: "RFQ: Basmati Rice 1121" },
                { c: "Sunrise Trading", t: "Lead: Wheat Flour" },
                { c: "Marina Imports", t: "RFQ: Sesame Seeds" },
              ].map((x, i) => (
                <div
                  key={i}
                  className="bg-muted rounded-xl p-3 text-xs flex items-center justify-between"
                >
                  <div className="truncate pr-2">
                    <span className="font-semibold">{x.c}</span> — {x.t}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" disabled>
                      <Lock className="w-3.5 h-3.5 mr-1" />
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Responding to RFQs is available on Growth/Pro plans.
            </div>
          </StatCard>
        </div>

        {/* Compliance Alerts */}
        <div className="lg:col-span-6">
          <StatCard icon={ShieldAlert} title="Compliance Alerts">
            <div className="space-y-2 text-sm">
              <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-xl p-3">
                1 Certificate expiring soon —{" "}
                <span className="font-semibold">FSSAI</span> (15 days)
              </div>
              <div className="bg-muted text-muted-foreground rounded-xl p-3">
                IEC License — valid until 2026-03-31
              </div>
            </div>
            <div className="mt-3">
              <Button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                Review Compliance
              </Button>
            </div>
          </StatCard>
        </div>

        {/* AI Tips */}
        <div className="lg:col-span-7">
          <StatCard icon={Lightbulb} title="AI Tips">
            <div className="text-sm text-muted-foreground">
              Consider exporting to two new markets this quarter. Update product
              descriptions with HS Codes for improved discovery.
            </div>
          </StatCard>
        </div>

        {/* AI Assistant Panel */}
        <div className="lg:col-span-5">
          <Card className="bg-muted/50 rounded-2xl h-full">
            <CardContent className="p-5 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-muted">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  AI Assistant
                </h3>
              </div>
              <div className="text-sm text-muted-foreground flex-1">
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
                <Button className="w-full bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
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
