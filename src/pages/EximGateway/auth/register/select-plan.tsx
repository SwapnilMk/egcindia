import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPlan,
  setSelectedRole,
  setFormData,
  setCurrentStep,
  setHasMembership,
  setRegistrationComplete,
  resetRegistration,
} from "@/store/slices/registerSlice";
import { RootState } from "@/store/store";

export default function SelectPlan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    selectedPlan,
    selectedRole,
    formData,
    currentStep,
    hasMembership,
  } = useSelector((state: RootState) => state.register);

  const planDetails = {
    "Basic Plan": {
      price: "₹0 / year",
      highlights: [
        "AECCI members only",
        "Limited market insights",
        "Up to 10 buying leads",
        "Basic trade guidance",
      ],
    },
    "Growth Plan": {
      price: "₹50,000 / year",
      highlights: [
        "50+ verified leads",
        "Monthly performance reports",
        "Product-market fit support",
      ],
    },
    "Pro Plan": {
      price: "₹100,000 / year",
      highlights: [
        "Unlimited segmented leads",
        "Weekly strategy reports",
        "Priority support",
        "Dedicated manager",
      ],
    },
  };

  type PlanType = keyof typeof planDetails;
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const roles = [
    {
      icon: "📦",
      title: "Exporters",
      desc: "Showcase products, send RFQs, manage compliance & shipments with AI support.",
      dashboard: "Enter Dashboard",
    },
    {
      icon: "🌍",
      title: "Importers",
      desc: "Find trusted exporters, compare quotes, track logistics & settle payments securely.",
      dashboard: "Enter Dashboard",
    },
    {
      icon: "🚚",
      title: "Transportation Agents",
      desc: "Fleet dashboard, GPS tracking, trip invoicing & customs handover integration.",
      dashboard: "Enter Dashboard",
    },
    {
      icon: "🛳",
      title: "Shipping Agents / Freight Forwarders",
      desc: "Submit freight quotes, schedules, BL/AWB docs & track cargo in real time.",
      dashboard: "Enter Dashboard",
    },
    {
      icon: "📄",
      title: "Consultants / Documentation Agents",
      desc: "Issue valid certificates (COO, Halal, Phyto, Insurance) with AI compliance validation.",
      dashboard: "Enter Dashboard",
    },
    {
      icon: "🏦",
      title: "Banks / Trade Finance Providers",
      desc: "Offer LCs, loans, forex & insurance — AI benchmarks best financing options.",
      dashboard: "Enter Dashboard",
    },
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.companyName.trim())
      errors.companyName = "Company name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      errors.phone = "Phone number must be 10 digits";

    if (!formData.membershipId.trim())
      errors.membershipId = "AECCI Membership ID is required";
    else if (formData.membershipId !== "AECCI/124DEMO/24-25") {
      errors.membershipId =
        "Invalid AECCI Membership ID. Please use: AECCI/124DEMO/24-25";
    }

    if (selectedPlan !== "Basic Plan") {
      if (!formData.gstPan.trim()) errors.gstPan = "GST/PAN is required";
      if (!formData.termsAgreed)
        errors.termsAgreed = "You must agree to the terms & conditions";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);

    // Fake API call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      dispatch(setRegistrationComplete());
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target as any;
    dispatch(setFormData({ [name]: type === "checkbox" ? checked : value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (currentStep === "plan") {
    return (
      <div className="bg-white text-gray-900 min-h-screen font-sans relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Select Your Plan</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Choose the perfect plan for your export-import business growth.
          </p>
        </section>

        {/* Plan Selector */}
        <section className="py-16 px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600">
              Select a plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(Object.keys(planDetails) as PlanType[]).map((plan) => {
              const isSelected = selectedPlan === plan;

              return (
                <Card
                  key={plan}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                  }`}
                  onClick={() => dispatch(setSelectedPlan(plan))}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-blue-900">
                        {plan}
                      </h3>
                    </div>

                    <p className="text-2xl font-bold text-blue-900 mb-4">
                      {planDetails[plan].price}
                    </p>

                    <ul className="space-y-2 mb-6 text-sm text-gray-700">
                      {planDetails[plan].highlights.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => dispatch(setCurrentStep("roles"))}
                      className={`w-full font-semibold py-3 rounded-full transition-colors ${
                        isSelected
                          ? "bg-blue-900 text-white hover:bg-blue-800"
                          : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                      }`}
                    >
                      {isSelected ? "Next: Select Role" : "Select Plan"}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Selected Plan Info */}
          {selectedPlan && (
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Your Selected Plan: {selectedPlan}
              </h3>
              <div className="flex justify-between text-sm">
                <span>Price:</span>
                <span className="font-semibold">
                  {planDetails[selectedPlan].price}
                </span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Status:</span>
                <span className="text-green-600 font-semibold">Active</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Next: Select your business role to continue
              </p>
            </div>
          )}
        </section>
      </div>
    );
  }

  if (currentStep === "roles") {
    return (
      <div className="bg-white text-gray-900 min-h-screen font-sans relative">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => dispatch(setCurrentStep("plan"))}
                className="flex items-center space-x-2 text-blue-200 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Step 1/2: Select Role</h2>
              <p className="text-blue-200 text-sm">
                Selected Plan: {selectedPlan}
              </p>
            </div>
            <div className="w-12" />
          </div>
        </section>

        {/* Role Selection */}
        <section className="py-16 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Select Your Business Role
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the role that best describes your primary business activity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const isSelected = selectedRole?.title === role.title;
              const isAvailable = role.title === "Exporters"; // Only Exporters available

              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : isAvailable
                        ? "border-gray-200 hover:border-blue-300"
                        : "border-gray-200 opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => isAvailable && dispatch(setSelectedRole(role))}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                        <span className="text-2xl">{role.icon}</span>
                      </div>

                      <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
                        {role.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 text-center flex-grow">
                        {role.desc}
                      </p>

                      <div className="text-center">
                        {isAvailable ? (
                          <button
                            onClick={() =>
                              dispatch(setCurrentStep("membership"))
                            }
                            disabled={!isSelected}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                              isSelected
                                ? "bg-blue-900 text-white hover:bg-blue-800"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {isSelected ? "Next: Membership" : "Select Role"}
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Selected Role Summary */}
          {selectedRole && (
            <div className="mt-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Selected Role: {selectedRole.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{selectedRole.desc}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Plan:</span>
                <span className="font-semibold">{selectedPlan}</span>
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }

  if (currentStep === "membership") {
    return (
      <div className="bg-white text-gray-900 min-h-screen font-sans relative">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => dispatch(setCurrentStep("roles"))}
                className="flex items-center space-x-2 text-blue-200 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Step 2/2: Verify Membership</h2>
              <p className="text-blue-200 text-sm">
                Role: {selectedRole?.title} | Plan: {selectedPlan}
              </p>
            </div>
            <div className="w-12" />
          </div>
        </section>

        {/* Membership Check - Show buttons only when hasMembership is null */}
        {hasMembership === null ? (
          <section className="py-16 px-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Do you have an active AECCI Membership ID?
            </h2>
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => dispatch(setHasMembership(true))}
                className={`px-8 py-3 rounded-full font-semibold shadow-lg transition-all ${
                  hasMembership === true
                    ? "bg-blue-900 text-white shadow-blue-500/25"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => dispatch(setHasMembership(false))}
                className={`px-8 py-3 rounded-full font-semibold shadow-lg transition-all ${
                  hasMembership === false
                    ? "bg-blue-900 text-white shadow-blue-500/25"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                No
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">If Yes:</h4>
                <p className="text-blue-800">
                  Enter your AECCI Membership ID to activate your plan instantly
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">If No:</h4>
                <p className="text-yellow-800">
                  Complete membership registration to get started with EXIM
                  Gateway
                </p>
              </div>
            </div>
          </section>
        ) : hasMembership ? (
          /* Show Form when hasMembership is true */
          <section className="py-16 px-8 max-w-4xl mx-auto">
            {!formSubmitted ? (
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                      <span className="mr-2">{selectedRole?.icon}</span>
                      {selectedRole?.title} Dashboard Setup
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      Complete Your Setup
                    </h3>
                    <p className="text-gray-600">
                      Plan:{" "}
                      <span className="font-semibold">{selectedPlan}</span> |
                      Role:{" "}
                      <span className="font-semibold">
                        {selectedRole?.title}
                      </span>
                    </p>
                  </div>

                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            formErrors.fullName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your full name"
                          required
                        />
                        {formErrors.fullName && (
                          <p className="mt-1 text-sm text-red-600">
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            formErrors.companyName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your company name"
                          required
                        />
                        {formErrors.companyName && (
                          <p className="mt-1 text-sm text-red-600">
                            {formErrors.companyName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your email address"
                          required
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your phone number"
                          required
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Membership ID */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        AECCI Membership ID *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="membershipId"
                          value={formData.membershipId}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 ${
                            formErrors.membershipId
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="AECCI/124DEMO/24-25"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 text-sm">ID</span>
                        </div>
                      </div>
                      {formErrors.membershipId ? (
                        <p className="mt-1 text-sm text-red-600">
                          {formErrors.membershipId}
                        </p>
                      ) : (
                        <p className="mt-1 text-sm text-gray-500">
                          Use:{" "}
                          <code className="bg-gray-100 px-1 rounded">
                            AECCI/124DEMO/24-25
                          </code>
                        </p>
                      )}
                    </div>

                    {/* Additional Info for Paid Plans */}
                    {selectedPlan !== "Basic Plan" && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            GST / PAN *
                          </label>
                          <input
                            type="text"
                            name="gstPan"
                            value={formData.gstPan}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              formErrors.gstPan
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter GSTIN or PAN"
                            required
                          />
                          {formErrors.gstPan && (
                            <p className="mt-1 text-sm text-red-600">
                              {formErrors.gstPan}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method
                          </label>
                          <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="UPI">UPI</option>
                            <option value="Netbanking">Netbanking</option>
                            <option value="Card">Credit / Debit Card</option>
                          </select>
                          <p className="text-sm text-gray-600 mt-1">
                            Amount:{" "}
                            <span className="font-semibold text-blue-900">
                              {planDetails[selectedPlan].price}
                            </span>
                          </p>
                        </div>
                      </>
                    )}

                    {/* Terms */}
                    {selectedPlan !== "Basic Plan" && (
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="termsAgreed"
                          checked={formData.termsAgreed}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          id="terms"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-700"
                        >
                          I agree to the{" "}
                          <span className="text-blue-600 hover:underline">
                            Terms & Conditions
                          </span>{" "}
                          *
                        </label>
                        {formErrors.termsAgreed && (
                          <p className="text-sm text-red-600 ml-auto">
                            {formErrors.termsAgreed}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full font-semibold py-4 rounded-full shadow-lg transition-all flex items-center justify-center space-x-3 ${
                          loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : selectedPlan === "Basic Plan"
                              ? "bg-green-600 text-white hover:bg-green-700"
                              : "bg-yellow-500 text-black hover:bg-yellow-600"
                        }`}
                      >
                        {loading ? (
                          <>
                            <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></span>
                            <span>Processing...</span>
                          </>
                        ) : selectedPlan === "Basic Plan" ? (
                          "Activate Free Plan"
                        ) : (
                          `Pay ${planDetails[selectedPlan].price} & Activate`
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              /* Success Screen */
              <Card className="shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <span className="text-3xl">✅</span>
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-4">
                    Welcome to EXIM Gateway!
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Your Setup is Complete
                    </h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex justify-between">
                        <span>Plan:</span>
                        <span className="font-medium">{selectedPlan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Role:</span>
                        <span className="font-medium">
                          {selectedRole?.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Member ID:</span>
                        <span className="font-medium">
                          {formData.membershipId}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8">
                    Your {selectedRole?.title} dashboard is now ready. You can
                    start managing your export business immediately.
                  </p>

                  <div className="space-y-3">
                    <button
                      className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                      onClick={() => navigate("/dashboard")}
                    >
                      Enter Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        dispatch(resetRegistration());
                      }}
                      className="w-full bg-gray-200 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Go to Home
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}
          </section>
        ) : (
          /* AECCI Membership Registration - Show when hasMembership is false */
          <section className="py-20 px-8 max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    AECCI Membership Registration
                  </h3>
                  <p className="text-gray-600">
                    Complete this form to get your AECCI membership and access
                    EXIM Gateway
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">Note:</h4>
                  <p className="text-sm text-yellow-700">
                    Membership approval takes 2-3 business days. You'll receive
                    your Membership ID via email.
                  </p>
                </div>

                <form className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Company Name *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Company Email Address *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Country *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Pincode *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="IEC Code / CIN No *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Contact No *"
                    className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    placeholder="How Can We Help You?"
                    className="md:col-span-2 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  ></textarea>

                  <div className="md:col-span-2 flex justify-center space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => dispatch(setCurrentStep("roles"))}
                      className="px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-400"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 shadow-lg"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    );
  }

  return null;
}