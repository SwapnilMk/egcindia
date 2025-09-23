import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const staggerContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function HowEximWorks() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans relative">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            From Documents to Delivery —
            <br />
            <span className="text-yellow-400">
              One Platform for Every Trade Role
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-4xl mx-auto font-medium"
          >
            EXIM Gateway connects Exporters, Importers, Transport Agents,
            Freight Forwarders, Consultants, and Banks in a single AI-powered
            workflow.
          </motion.p>
        </div>
      </motion.section>

      {/* Workflow Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Real-Time Workflow Mapping
          </motion.h2>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 mb-16 text-center"
          >
            {[
              { icon: "📦", label: "Exporter", color: "text-blue-600" },
              { icon: "➡️", label: "", color: "text-gray-400" },
              { icon: "🌍", label: "Importer", color: "text-green-600" },
              { icon: "➡️", label: "", color: "text-gray-400" },
              {
                icon: "🚚",
                label: "Transport Agent",
                color: "text-yellow-600",
              },
              { icon: "➡️", label: "", color: "text-gray-400" },
              {
                icon: "🛳",
                label: "Freight Forwarder",
                color: "text-purple-600",
              },
              { icon: "➡️", label: "", color: "text-gray-400" },
              { icon: "📄", label: "Consultant", color: "text-red-600" },
              { icon: "➡️", label: "", color: "text-gray-400" },
              { icon: "🏦", label: "Bank", color: "text-indigo-600" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={timelineItemVariants}
                className={`flex flex-col items-center text-xl sm:text-2xl font-semibold ${item.color}`}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="mb-1"
                >
                  {item.icon}
                </motion.div>
                {item.label && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Role Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "📦",
                title: "Exporters",
                steps: [
                  {
                    step: "Start",
                    desc: "Upload invoices, packing list, and trade documents.",
                  },
                  {
                    step: "Platform Action",
                    desc: "AI validates HS codes, matches buyer RFQs.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Dashboard shows shipment readiness + finance status.",
                  },
                  {
                    step: "End",
                    desc: "Receives secure payment via escrow or bank release.",
                  },
                ],
                color: "text-blue-600",
              },
              {
                icon: "🌍",
                title: "Importers",
                steps: [
                  {
                    step: "Start",
                    desc: "Post RFQs, compare offers, and place purchase orders.",
                  },
                  {
                    step: "Platform Action",
                    desc: "AI recommends suppliers, drafts digital PO.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Track shipments and transport handovers.",
                  },
                  {
                    step: "End",
                    desc: "Release payments once goods are delivered.",
                  },
                ],
                color: "text-green-600",
              },
              {
                icon: "🚚",
                title: "Transport Agents",
                steps: [
                  {
                    step: "Start",
                    desc: "Schedule pickup from exporter warehouse.",
                  },
                  {
                    step: "Platform Action",
                    desc: "GPS fleet tracking, trip invoicing.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Pickup/delivery synced with exporter, importer & freight agents.",
                  },
                  {
                    step: "End",
                    desc: "Cargo delivered to port or shipping line.",
                  },
                ],
                color: "text-yellow-600",
              },
              {
                icon: "🛳",
                title: "Shipping / Freight Forwarders",
                steps: [
                  { step: "Start", desc: "Book cargo on vessel/aircraft." },
                  {
                    step: "Platform Action",
                    desc: "Generate BL/AWB, schedules, freight quotes.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Track vessel/flight and shipment milestones.",
                  },
                  {
                    step: "End",
                    desc: "Cargo handed over at destination for importer.",
                  },
                ],
                color: "text-purple-600",
              },
              {
                icon: "📄",
                title: "Consultants / Documentation Agents",
                steps: [
                  {
                    step: "Start",
                    desc: "Collect exporter/importer document requests.",
                  },
                  {
                    step: "Platform Action",
                    desc: "Issue COO, Halal, Phyto, Insurance certificates with AI validation.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Compliance status synced to exporter, bank, and freight agent.",
                  },
                  {
                    step: "End",
                    desc: "Certified documents shared across stakeholders.",
                  },
                ],
                color: "text-red-600",
              },
              {
                icon: "🏦",
                title: "Banks / Trade Finance Providers",
                steps: [
                  {
                    step: "Start",
                    desc: "Receive LC, BG, or trade finance requests.",
                  },
                  {
                    step: "Platform Action",
                    desc: "Validate documentation, offer financing & forex options.",
                  },
                  {
                    step: "Real-Time",
                    desc: "Escrow/LC status updates visible to exporters & importers.",
                  },
                  {
                    step: "End",
                    desc: "Payment disbursed to exporter after confirmed delivery.",
                  },
                ],
                color: "text-indigo-600",
              },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full shadow-sm border-0 hover:shadow-md transition-all duration-300 bg-white border-gray-200">
                  <CardContent className="p-6 h-full flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center mb-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`text-4xl mb-3 ${role.color}`}
                      >
                        {role.icon}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-xl font-bold text-blue-900 mb-2"
                      >
                        {role.title}
                      </motion.h3>
                    </motion.div>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-3 text-sm text-gray-700 flex-1"
                    >
                      {role.steps.map((step, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          className="flex flex-col space-y-1"
                        >
                          <span className="font-semibold text-blue-800 text-xs uppercase tracking-wide">
                            {step.step}
                          </span>
                          <span className="text-gray-600 leading-relaxed">
                            {step.desc}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-blue-900 text-white py-16 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-6"
          >
            Your Trade Journey — Seamlessly Connected
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 text-lg transition-all"
              onClick={() => navigate("/services/exim-gateway")}
            >
              Explore Features
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
