import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for personal use and small teams",
      features: [
        "Up to 3 participants",
        "40-minute meeting limit",
        "HD video quality",
        "Screen sharing",
        "Basic chat",
        "Mobile & desktop apps",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 100 participants",
        "Unlimited meeting duration",
        "4K video quality",
        "Meeting recording",
        "Advanced chat & file sharing",
        "Breakout rooms",
        "Analytics dashboard",
        "Priority support",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$25",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Up to 1000 participants",
        "Enterprise-grade security",
        "Custom branding",
        "Advanced admin controls",
        "SSO integration",
        "API access",
        "Dedicated support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-blue-500 scale-105 z-10"
                  : "border border-gray-100"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full px-6 py-3 rounded-lg text-base font-semibold transition duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:brightness-110"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
